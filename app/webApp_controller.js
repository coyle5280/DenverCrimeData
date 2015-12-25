Ext.onReady(function () {

    var map_panel = Ext.create("Map_Panel");
    var header_panel = Ext.create("Header_Panel");
    var user_input_tabs = Ext.create("User_Input_Tabs");
    
    
    Ext.create('Ext.Viewport',{
        title: 'Denver County Crime Data',
        layout: 'border',
        items: [map_panel, header_panel, user_input_tabs]
    
    });

    





});