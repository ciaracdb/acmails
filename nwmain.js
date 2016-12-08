nw.Window.open('index.html', {}, function(win) {
    win.setResizable(true);
    win.resizeTo(window.screen.availWidth / 3 * 2, window.screen.availHeight - 5);
    win.moveTo(0, 5);
    //
    // win.on('close', function() {
    //     win.hide();
    // });
    //
    // var tray = new nw.Tray({ title: 'ACMails', icon: 'images/icon.png' });
    //
    // var trayMenu = new nw.Menu();
    // trayMenu.append(new nw.MenuItem({
    //     type: 'normal',
    //     label: 'Quitter',
    //     click: function() {
    //         win.close(true);
    //     }
    // }));
    // tray.menu = trayMenu;
    //
    // tray.on('click', function() {
    //     win.show();
    // })
});