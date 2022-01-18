
    var highlightLayer;
    function highlightFeature(e) {
        highlightLayer = e.target;

        if (e.target.feature.geometry.type === 'LineString') {
            highlightLayer.setStyle({
                color: '#ffff00',
            });
        } else {
            highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
            });
        }
    }
    var map = L.map('map', {
        zoomControl: true, maxZoom: 28, minZoom: 1
    }).fitBounds([[-8.05864041653, -39.4977657993], [-4.40918767253, -33.8698403371]]);
    var hash = new L.Hash(map);
    map.attributionControl.addAttribution('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a>');
    var bounds_group = new L.featureGroup([]);

    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data &copy; OpenStreetMap contributors';

    var basemap0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 28
    });
    basemap0.addTo(map);
    var basemap1 = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 28
    });

    var basemap2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 28
    });
    function setBounds() {
    }
	
    function pop_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0(feature, layer) {
        layer.on({
            mouseout: function(e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">Município</th>\
                    <td>' + (feature.properties['nome'] !== null ? Autolinker.link(feature.properties['nome'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Geocodigo</th>\
                    <td>' + (feature.properties['geocodigo'] !== null ? Autolinker.link(feature.properties['geocodigo'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - Agrícola</th>\
                    <td>' + (feature.properties['FNE_Agríc'] !== null ? Autolinker.link(feature.properties['FNE_Agríc'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - Agroindustria</th>\
                    <td>' + (feature.properties['FNE_Agroin'] !== null ? Autolinker.link(feature.properties['FNE_Agroin'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNe - Comércio e Serviços</th>\
                    <td>' + (feature.properties['FNE_Comér'] !== null ? Autolinker.link(feature.properties['FNE_Comér'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - Indústria</th>\
                    <td>' + (feature.properties['FNE_Indús'] !== null ? Autolinker.link(feature.properties['FNE_Indús'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - Infraestrutura</th>\
                    <td>' + (feature.properties['FNE_Infrae'] !== null ? Autolinker.link(feature.properties['FNE_Infrae'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - Pecuária</th>\
                    <td>' + (feature.properties['FNE_Pecuá'] !== null ? Autolinker.link(feature.properties['FNE_Pecuá'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - Pessoa Física</th>\
                    <td>' + (feature.properties['FNE_Pessoa'] !== null ? Autolinker.link(feature.properties['FNE_Pessoa'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - Turismo</th>\
                    <td>' + (feature.properties['FNE_Turism'] !== null ? Autolinker.link(feature.properties['FNE_Turism'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">FNE - TOTAL</th>\
                    <td>' + (feature.properties['FNE_Total'] !== null ? Autolinker.link(feature.properties['FNE_Total'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        layer.bindPopup(popupContent, {maxHeight: 400});
    }

    function style_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0_0() {
        return {
            pane: 'pane_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0',
            radius: 4.0,
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1,
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(34,177,76,1.0)',
            interactive: true,
        }
    }
    map.createPane('pane_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0');
    map.getPane('pane_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0').style.zIndex = 400;
    map.getPane('pane_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0').style['mix-blend-mode'] = 'normal';
    var layer_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0 = new L.geoJson(json_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0, {
        attribution: '',
        interactive: true,
        dataVar: 'json_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0',
        layerName: 'layer_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0',
        pane: 'pane_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0',
        onEachFeature: pop_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0,
        pointToLayer: function (feature, latlng) {
            var context = {
                feature: feature,
                variables: {}
            };
            return L.circleMarker(latlng, style_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0_0(feature));
        },
    });
    bounds_group.addLayer(layer_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0);
    map.addLayer(layer_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0);

    function pop_Lim_Sudene_Municipal_TesteSIG_BASEshp_0(feature, layer) {
        layer.on({
            mouseout: function(e) {
                for (i in e.target._eventParents) {
                    e.target._eventParents[i].resetStyle(e.target);
                }
            },
            mouseover: highlightFeature,
        });
        var popupContent = '<table>\
                <tr>\
                    <th scope="row">Geocodigo</th>\
                    <td>' + (feature.properties['CD_MUN'] !== null ? Autolinker.link(feature.properties['CD_MUN'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">UF</th>\
                    <td>' + (feature.properties['SIGLA_UF'] !== null ? Autolinker.link(feature.properties['SIGLA_UF'].toLocaleString()) : '') + '</td>\
                </tr>\
                <tr>\
                    <th scope="row">Município</th>\
                    <td>' + (feature.properties['SUD_NM_MUN'] !== null ? Autolinker.link(feature.properties['SUD_NM_MUN'].toLocaleString()) : '') + '</td>\
                </tr>\
            </table>';
        layer.bindPopup(popupContent, {maxHeight: 400});
    }

    function style_Lim_Sudene_Municipal_TesteSIG_BASEshp_0_0() {
        return {
            pane: 'pane_Lim_Sudene_Municipal_TesteSIG_BASEshp_0',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1, 
            fill: true,
            fillOpacity: 1,
            fillColor: 'rgba(215,25,28,0.0)',
            interactive: true,
        }
    }
    map.createPane('pane_Lim_Sudene_Municipal_TesteSIG_BASEshp_0');
    map.getPane('pane_Lim_Sudene_Municipal_TesteSIG_BASEshp_0').style.zIndex = 400;
    map.getPane('pane_Lim_Sudene_Municipal_TesteSIG_BASEshp_0').style['mix-blend-mode'] = 'normal';
    var layer_Lim_Sudene_Municipal_TesteSIG_BASEshp_0 = new L.geoJson(json_Lim_Sudene_Municipal_TesteSIG_BASEshp_0, {
        attribution: '',
        interactive: true,
        dataVar: 'json_Lim_Sudene_Municipal_TesteSIG_BASEshp_0',
        layerName: 'layer_Lim_Sudene_Municipal_TesteSIG_BASEshp_0',
        pane: 'pane_Lim_Sudene_Municipal_TesteSIG_BASEshp_0',
        onEachFeature: pop_Lim_Sudene_Municipal_TesteSIG_BASEshp_0,
        style: style_Lim_Sudene_Municipal_TesteSIG_BASEshp_0_0,
    });
    bounds_group.addLayer(layer_Lim_Sudene_Municipal_TesteSIG_BASEshp_0);
    map.addLayer(layer_Lim_Sudene_Municipal_TesteSIG_BASEshp_0);

    //legendas
    var htmlLegend1 = L.control.htmllegend({
        position: 'bottomleft',
        legends: [{
            name: 'Pontos',
            layer: layer_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0,
            elements: [{
                label: 'Pontos',
                html: '<img src="legend/Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0.png" />'
            }]
        }],
    })
    map.addControl(htmlLegend1)

    var htmlLegend2 = L.control.htmllegend({
        position: 'bottomleft',
        legends: [{
            name: 'Mapa',
            layer: layer_Lim_Sudene_Municipal_TesteSIG_BASEshp_0,
            elements: [{
                label: 'Mapa',
                html: '<img src="legend/Lim_Sudene_Municipal_TesteSIG_BASEshp_0.png" />'
            }]
        }],
    })
    map.addControl(htmlLegend2)

    //grupo de camadas
    var baseMaps = [
        {
            groupName: "Mapas Base",
            expanded: true,
            layers: {
                "Open Street Maps": basemap0,
                "Open Street Maps - P&B": basemap1,
                "Sátelite - ERSI": basemap2,
            }
        }
    ];

    var Camadas = [{
        groupName: "Sudene",
        expanded: true,
        layers: {
            "Pontos": layer_Lim_Sudene_Municipal_TesteSIG_BASE_Ponto_0,
            "Mapa": layer_Lim_Sudene_Municipal_TesteSIG_BASEshp_0,
        }
    }
    ];

    var options = {
        container_width: "300px",
        container_maxHeight: "800px",
        group_maxHeight: "150px",
        exclusive: false
    };
    var control = L.Control.styledLayerControl(baseMaps, Camadas, options);
    map.addControl(control)



    //Coordenadas Mouse
    L.control.mousePosition({
        position: 'bottomright'
    }).addTo(map)

    //adiciona escala gráfica
    L.control.scale({
        position: 'bottomright'
    }).addTo(map);
