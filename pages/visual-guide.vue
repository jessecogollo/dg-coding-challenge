<template>
  <div>
    <div class="dg-overline m-4">
      Data<span class="dg-font-bold">Guard</span>
    </div>
    <div>
      <h1 class="dg-h1 m-4">Marketing Plugins</h1>
    </div>
    <div>
      <ul>
        <li class="flex dg-h1 m-4"><IconMarketing class="mr-2" /> Marketing</li>
        <li class="flex dg-h1 m-4"><IconFinance class="mr-2" /> Finance</li>
        <li class="flex dg-h1 m-4"><IconPeople class="mr-2" /> Personnel</li>
      </ul>
    </div>
    <div class="m-4">
      <Toogle title="All plugins" />
    </div>
    <div class="m-4">
      <Toogle title="Plugin 7" :has-icon="false" />
    </div>
    <div class="m-4 w-80">
      <Card />
    </div>
    <div class="m-4 w-80">
      <Card :disabled="true" />
    </div>
  </div>
</template>
