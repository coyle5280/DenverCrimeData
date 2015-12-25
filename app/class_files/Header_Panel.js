Ext.define('Header_Panel', {
    extend: 'Ext.panel.Panel',
    layout: 'hbox',
    height: 125,
    region: 'north',
    items: [{
        xtype: 'box',
        html: '<img src="resources/images/DenverCOseal.gif" title="Denver County Seal" style="height:100px;margin-left:11px;margin-top:7px;">'
    }]
});