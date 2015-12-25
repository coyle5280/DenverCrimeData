Ext.define('User_Input_Tabs',{
    extend: ('Ext.tab.Panel'),
    region: 'west',
    minWidth: 250,
    maxWidth: 600,
    layout: 'vbox',
    width: 300,
    split: true,
    collapsible: true,
    collapseMode: 'mini',
    hideCollapseTool: true,
    header: false,
    items: [{
        title: 'Address Input',
        layout: 'form',
        items:[{
            xtype: 'textfield',
            name: 'address',
            fieldLabel: 'Search Address',
            labelAlign: 'top',
            height: 20,
            flex: 1,
//            width: 100%
        }]
        
    },{
        title: 'Info Select'
    }]
});