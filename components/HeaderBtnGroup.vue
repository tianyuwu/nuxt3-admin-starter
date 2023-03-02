<script setup lang="ts"></script>

<template>
  <div>
    <el-dropdown>
      <el-avatar class="my-avatar cursor-pointer"> user </el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style>
.my-avatar:focus-visible  {
  outline: none;
}
</style>