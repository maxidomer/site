//let newWin = window.open("about:blank", "hello", "width=500,height=900,left=530");
button.addEventListener('click', async () => {
  const perm = await Notification.reguestPermission()

  if (perm === 'granted'){
    const notification = new Notification('hi everyone', {
      body: 'heyasdasdasdasdasdasd',
      data: {
        url: 'login.html'
      },
      icon: 'on_progress.png',
      tag: 'notif',
      action: {
        url:'my_projects.html'
      }
    })
  }
})
