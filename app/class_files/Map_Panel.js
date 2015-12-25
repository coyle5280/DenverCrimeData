Ext.define('Map_Panel',{
    extend: 'CartoDBPanel',
    itemId: 'map_panel',
    layout: 'fit',
    region: 'center',
    initComponent: function(){
        this.sql = new cartodb.SQL({
            user: 'coyle5280',
            format: 'geojson'
        });
        this.baselayer = {
            positron_labels_below: {
                    url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                }
        }
    
    this.callParent();
    },
    
    changeBaseMap: function (layer) {
        this.mapComponent.setBaseLayer(this.baselayer[layer]);
        
    },
    afterRender: function () {
        var me = this;
        setTimeout(function () {
            me.mapComponent.setBaseLayer(me.baselayer.positron_labels_below);
        }, 500);
    },
    


});