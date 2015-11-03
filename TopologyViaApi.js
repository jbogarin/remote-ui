(function(nx, global) {
    // nx.graphic.Icons.registerIcon("male", "https://upload.wikimedia.org/wikipedia/commons/4/4e/Aiga_toiletsq_men.svg", 32, 32);
    nx.graphic.Icons.registerIcon("male", "http://172.17.3.62/jbogarin/men.svg", 64, 64);
    // nx.graphic.Icons.registerIcon("female", "https://upload.wikimedia.org/wikipedia/commons/e/e3/Toilet_women.svg", 32, 32);
    nx.graphic.Icons.registerIcon("female", "http://172.17.3.62/jbogarin/women.svg", 64, 64);
    nx.graphic.Icons.registerIcon("trash", "http://172.17.3.62/jbogarin/trash.svg", 32, 32);
    nx.graphic.Icons.registerIcon("towel", "http://172.17.3.62/jbogarin/towel.svg", 32, 32);
    nx.define('demo.TopologyViaApi', nx.ui.Component, {
        view: {
            props: {
                'class': "demo-topology-via-api"
            },
            content: {
                name: 'topology',
                type: 'nx.graphic.Topology',
                props: {
                    showIcon: true,
                    theme: 'slate',
                    identityKey: 'id',
                    width: 600,
                    height: 580,
                    adaptive: true,
                    data: '{#topologyData}',
                    nodeConfig: {
                        label: 'model.name',
                        iconType: 'model.device_type',
                        color: 'model.color'
                    },
                    nodeSetConfig: {
                        label: 'model.name',
                        iconType: 'model.device_type',
                        color: 'model.color'
                    }
                }
            }
        },
        properties: {
            topologyData: {}
        },
        methods: {
            init: function(options) {
                this.inherited(options);
                this.loadRemoteData();
            },
            loadRemoteData: function() {
                // CAUTION you must resolve the cross-domain problem in you own environment!
                // var URL_TOPOLOGY = 'https://sandboxapic.cisco.com/api/v0/topology/physical-topology';
                // var URL_TOPOLOGY = 'http://128.107.32.205:6543/api/afa/v1/baths';
                var URL_TOPOLOGY = 'http://172.17.3.62:6543/api/afa/v1/baths';
                $.ajax({
                    url: URL_TOPOLOGY,
                    success: function(data) {
                        this.topologyData(data);
                    }.bind(this)
                });
            }
        }
    });
    // register icon globally
    // register icon globally
})(nx, nx.global);
