<template>
  <div class="grid grid-cols-10 h-min-full">
    <div
      :class="[
        toogle ? 'to-green-lighten-1' : 'to-red-lighten-1',
        'flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-grey-lighten-1 px-6 pb-5 col-span-2 h-screen bg-gradient-to-b from-grey-lighten-1 from-95%',
      ]"
    >
      <div class="flex h-16 shrink-0 items-center">
        <p class="dg-overline">Data<span class="dg-font-bold">Guard</span></p>
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in navigation" :key="item.name">
                <a
                  v-if="!item.children"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-white border-l-4 border-solid border-red'
                      : 'hover:bg-gray-50 pl-5',
                    'group flex gap-x-3 p-4 dg-body text-grey-darken-1 -mx-4',
                  ]"
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
                <Disclosure as="div" v-else v-slot="{ open }">
                  <DisclosureButton
                    :class="[
                      item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                      'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                    <ChevronRightIcon
                      :class="[
                        open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                        'ml-auto h-5 w-5 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel as="ul" class="mt-1 px-2">
                    <li v-for="subItem in item.children" :key="subItem.name">
                      <!-- 44px -->
                      <DisclosureButton
                        as="a"
                        :href="subItem.href"
                        :class="[
                          subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                          'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700',
                        ]"
                        >{{ subItem.name }}</DisclosureButton
                      >
                    </li>
                  </DisclosurePanel>
                </Disclosure>
              </li>
            </ul>
          </li>
          <li class="-mx-6 mt-auto">
            <a href="#" class="flex items-center gap-x-4 px-8 py-3">
              <Toogle
                title="All plugins"
                class="w-screen text-xs"
                :status="toogle"
                @toogle-value="handleToogle"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="col-span-8 p-8">
      <h1 class="dg-h1 pb-8">{{ pageTitle }} Plugins</h1>
      <NuxtPage page-key="static" />
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

import IconMarketing from "~/components/Icon/Marketing";
import IconPeople from "~/components/Icon/People";
import IconFinance from "~/components/Icon/Finance";

const iconsMap = {
  "icon-marketing": IconMarketing,
  "icon-people": IconPeople,
  "icon-finance": IconFinance,
};

const route = useRoute();
const { tab } = route.params;

const { data } = await usePlugin();
const pageTitle = ref(data?.value?.data?.tabdata[tab]?.title || "Dashboard");

const navigation = computed(() => {
  return data.value.data.tabs.map((tabName) => {
    const currentTab = data.value.data.tabdata[tabName];
    return {
      name: currentTab.title,
      href: `/dashboard/${tabName}`,
      icon: iconsMap[currentTab.icon],
      current: tab === tabName,
    };
  });
});

const cookieToogle = useCookie("toogle");
const toogle = useToogle(cookieToogle.value);

function handleToogle(value) {
  useUpdateToogle(!value);
}
</script>
