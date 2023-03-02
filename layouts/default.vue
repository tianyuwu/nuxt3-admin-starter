<script setup>
const { menuList } = useAppConfig()
</script>
<template>
  <el-container class="h-100vh">
    <aside class="my-aside relative border-r border-r-solid border-gray-300">
      <SideMenu :menulist="menuList" />
    </aside>
    <el-container>
      <el-header class="flex items-center justify-end">
        <HeaderBtnGroup />
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.my-aside {
  width: auto;
  overflow: unset;
}
</style>
