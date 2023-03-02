export default defineAppConfig({
  title: 'Nuxt3 Admin',
  menuList: [
    {
      name: '首页',
      icon: 'HomeFilled',
      path: '/',
    },
    {
      name: '系统管理',
      icon: 'Setting',
      path: '/system',
      children: [
        {
          name: '管理员管理',
          path: '/system/admin',
          permissions: [
            'add',
            'edit',
            'delete',
            {
              label: '修改密码',
              value: 'changePass',
            },
          ],
        },
        {
          name: '角色管理',
          path: '/system/role',
          permissions: ['add', 'edit', 'delete'],
        },
        {
          name: '权限管理',
          path: '/system/permission',
          permissions: ['add', 'edit', 'delete'],
        },
      ],
    },
    
  ],
})
