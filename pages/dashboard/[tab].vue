<template>
  <div class="grid grid-cols-3 gap-8">
    <div v-for="plugin in plugins" :key="plugin.title" class="w-80">
      <Card
        :title="plugin.title"
        :description="plugin.description"
        :disabled="plugin.disabled"
        :status="plugin.status"
        @card-toggle-value="handlePluginToggleValue(plugin.key, $event)"
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

const plugins = computed(() => {
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
    return a.title - b.title;
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

async function handlePluginToggleValue(pluginKey, toogleValue) {
  const { data } = await useUpdatePlugin({
    pluginKey,
    toogleValue: !toogleValue,
  });
  //Mock BE response
  // console.log("data", data.value.data);
}
</script>
