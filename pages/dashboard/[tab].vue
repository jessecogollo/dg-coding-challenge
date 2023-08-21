<template>
  <div class="grid grid-cols-3 gap-8">
    <div class="w-80">
      <Card title="Plugin 1" :disabled="true" :status="true" />
    </div>
    <div class="w-80">
      <Card title="Plugin 2" :status="false" />
    </div>
    <div class="w-80">
      <Card title="Plugin 3" :status="true" />
    </div>
    <div class="w-80">
      <Card title="Plugin 4" :status="false" />
    </div>
    <div class="w-80">
      <Card title="Plugin 5" :status="true" />
    </div>
    <div class="w-80">
      <Card title="Plugin 6" :status="false" />
    </div>
  </div>
</template>
