var wms_layers = [];

var format_SALVADOR_QUARTEIROES_PROJ_0 = new ol.format.GeoJSON();
var features_SALVADOR_QUARTEIROES_PROJ_0 = format_SALVADOR_QUARTEIROES_PROJ_0.readFeatures(json_SALVADOR_QUARTEIROES_PROJ_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALVADOR_QUARTEIROES_PROJ_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALVADOR_QUARTEIROES_PROJ_0.addFeatures(features_SALVADOR_QUARTEIROES_PROJ_0);
var lyr_SALVADOR_QUARTEIROES_PROJ_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SALVADOR_QUARTEIROES_PROJ_0, 
                style: style_SALVADOR_QUARTEIROES_PROJ_0,
                popuplayertitle: 'SALVADOR_QUARTEIROES_PROJ',
                interactive: true,
                title: '<img src="styles/legend/SALVADOR_QUARTEIROES_PROJ_0.png" /> SALVADOR_QUARTEIROES_PROJ'
            });
var format_delimitacao_de_bairros_oficial_1 = new ol.format.GeoJSON();
var features_delimitacao_de_bairros_oficial_1 = format_delimitacao_de_bairros_oficial_1.readFeatures(json_delimitacao_de_bairros_oficial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delimitacao_de_bairros_oficial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_delimitacao_de_bairros_oficial_1.addFeatures(features_delimitacao_de_bairros_oficial_1);
var lyr_delimitacao_de_bairros_oficial_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_delimitacao_de_bairros_oficial_1, 
                style: style_delimitacao_de_bairros_oficial_1,
                popuplayertitle: 'delimitacao_de_bairros_oficial',
                interactive: true,
                title: '<img src="styles/legend/delimitacao_de_bairros_oficial_1.png" /> delimitacao_de_bairros_oficial'
            });
var format_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2 = new ol.format.GeoJSON();
var features_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2 = format_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2.readFeatures(json_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2.addFeatures(features_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2);
var lyr_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2, 
                style: style_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2,
                popuplayertitle: 'DEN_BLOQ_28.09.2026_SIG_RAIOS_INTERSEC',
                interactive: true,
                title: '<img src="styles/legend/DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2.png" /> DEN_BLOQ_28.09.2026_SIG_RAIOS_INTERSEC'
            });
var format_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3 = new ol.format.GeoJSON();
var features_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3 = format_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.readFeatures(json_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.addFeatures(features_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3);
var lyr_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3, 
                style: style_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3,
                popuplayertitle: 'CHIK_BLOQ_28.09.2026_SIG_RAIOS_INTERSEC',
                interactive: true,
                title: '<img src="styles/legend/CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.png" /> CHIK_BLOQ_28.09.2026_SIG_RAIOS_INTERSEC'
            });

lyr_SALVADOR_QUARTEIROES_PROJ_0.setVisible(true);lyr_delimitacao_de_bairros_oficial_1.setVisible(true);lyr_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2.setVisible(true);lyr_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.setVisible(true);
var layersList = [lyr_SALVADOR_QUARTEIROES_PROJ_0,lyr_delimitacao_de_bairros_oficial_1,lyr_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2,lyr_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3];
lyr_SALVADOR_QUARTEIROES_PROJ_0.set('fieldAliases', {'NM_BAIRRO': 'NM_BAIRRO', 'COD_BAIRRO': 'COD_BAIRRO', 'COD_DISTRI': 'COD_DISTRI', 'NM_DISTRIT': 'NM_DISTRIT', 'N_IMOVEIS': 'N_IMOVEIS', 'N_QT': 'N_QT', 'SUB_COORD': 'SUB_COORD', 'DIV_OPERAC': 'DIV_OPERAC', });
lyr_delimitacao_de_bairros_oficial_1.set('fieldAliases', {'NOME_BAIRR': 'NOME_BAIRR', 'INSTITUIDO': 'INSTITUIDO', 'COD_PDDU': 'COD_PDDU', 'DIS_SANITA': 'DIS_SANITA', 'CD_DIS_SAN': 'CD_DIS_SAN', });
lyr_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SALVADOR_QUARTEIROES_PROJ_0.set('fieldImages', {'NM_BAIRRO': 'TextEdit', 'COD_BAIRRO': 'TextEdit', 'COD_DISTRI': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'N_IMOVEIS': 'TextEdit', 'N_QT': 'TextEdit', 'SUB_COORD': 'TextEdit', 'DIV_OPERAC': 'TextEdit', });
lyr_delimitacao_de_bairros_oficial_1.set('fieldImages', {'NOME_BAIRR': 'TextEdit', 'INSTITUIDO': 'TextEdit', 'COD_PDDU': 'TextEdit', 'DIS_SANITA': 'TextEdit', 'CD_DIS_SAN': 'TextEdit', });
lyr_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_SALVADOR_QUARTEIROES_PROJ_0.set('fieldLabels', {'NM_BAIRRO': 'no label', 'COD_BAIRRO': 'no label', 'COD_DISTRI': 'no label', 'NM_DISTRIT': 'no label', 'N_IMOVEIS': 'no label', 'N_QT': 'no label', 'SUB_COORD': 'no label', 'DIV_OPERAC': 'no label', });
lyr_delimitacao_de_bairros_oficial_1.set('fieldLabels', {'NOME_BAIRR': 'no label', 'INSTITUIDO': 'no label', 'COD_PDDU': 'no label', 'DIS_SANITA': 'no label', 'CD_DIS_SAN': 'no label', });
lyr_DEN_BLOQ_28092026_SIG_RAIOS_INTERSEC_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CHIK_BLOQ_28092026_SIG_RAIOS_INTERSEC_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});