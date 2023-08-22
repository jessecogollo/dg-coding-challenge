<template>
  <div class="grid grid-cols-3 gap-8">
    <div v-for="card in cards" :key="card.title" class="w-80">
      <Card
        :title="card.title"
        :description="card.description"
        :disabled="card.disabled"
        :status="card.status"
        @card-toggle-value="handleCardToggleValue(card.key, $event)"
      />
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const { tab } = route.params;

const { data } = await usePlugin();
const currentTab = data.value.data.tabdata[tab];

const cookieToogle = useCookie("toogle");

const cards = computed(() => {
  const toogle = useToogle(cookieToogle.value);

  const actives = currentTab.active.map(getPluginMap).map((plugin) => {
    return {
      ...plugin,
      status: true,
      disabled: toogle.value ? currentTab.disabled.includes(plugin.key) : true,
    };
  });
  const inactives = currentTab.inactive.map(getPluginMap).map((plugin) => {
    return {
      ...plugin,
      status: false,
      disabled: toogle.value ? currentTab.disabled.includes(plugin.key) : true,
    };
  });
  const disables = currentTab.disabled.map(getPluginMap).map((plugin) => {
    return {
      ...plugin,
      status: false,
      disabled: true,
    };
  });
  return [...actives, ...inactives, ...disables].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
});

function getPluginMap(pluginKey) {
  const currentPlugin = data.value.data.plugins[pluginKey];
  return {
    key: pluginKey,
    title: currentPlugin.title,
    description: currentPlugin.description,
  };
}

async function handleCardToggleValue(cardKey, toogleValue) {
  const { data } = await useUpdatePlugin({
    cardKey,
    toogleValue: !toogleValue,
  });
  //Mock BE response
  // console.log("data", data.value.data);
}
</script>
