var main_config = require('../../main_config');
const bucketName = main_config.mapTilesBucket;
const csvBucketName = main_config.csvBucket;
const csvBucketFolder = 'test-bucket';
const csvFiles = {
  LandUse: 'land_use',
  SownAreaKharif: 'sown_area',
  SownAreaRabi: 'sown_area',
  IrrigatedAreaRabi: 'irrigated_area',
  IrrigatedAreaKharif: 'irrigated_area',
  SoilMoistureIndexNov: 'soil_moisture_index',
  SoilMoistureIndexOct: 'soil_moisture_index'
};

const bucketFolders = {
  LandUse: {
    wc1: {
      2015: 'LandUse_wc123_2015_z14',
      2015: 'LandUse_wc123_2015_z14'
    },
    wc2: {
      2015: 'LandUse_wc123_2015_z14',
      2015: 'LandUse_wc123_2015_z14'
    },
    wc3: {
      2015: 'LandUse_wc123_2015_z14',
      2015: 'LandUse_wc123_2015_z14'
    }
  },
  SownAreaKharif: {
    wc1: {
      2015: 'mapToCloudExample_fullvis',
      2016: 'mapToCloudExample_fullvis_2017_18'
    },
    wc2: {
      2016: 'mapToCloudExample_fullvis',
      2017: 'mapToCloudExample_fullvis_2017_18'
    },
    wc3: {
      2017: 'mapToCloudExample_fullvis',
      2018: 'mapToCloudExample_fullvis_2017_18'
    }
  },
  SownAreaRabi: {
    wc1: {
      2015: 'SownAreaRabi_wc123_2015_z14',
      2016: 'SownAreaRabi_wc123_2016_z14'
    },
    wc2: {
      2016: 'SownAreaRabi_wc123_2016_z14',
      2017: 'SownAreaRabi_wc123_2017_z14'
    },
    wc3: {
      2017: 'SownAreaRabi_wc123_2017_z14',
      2018: 'SownAreaRabi_wc123_2018_z14'
    }
  },
  IrrigatedAreaKharif: {
    wc1: {
      2015: 'mapToCloudExample_fullvis',
      2016: 'mapToCloudExample_fullvis_2017_18'
    },
    wc2: {
      2016: 'mapToCloudExample_fullvis',
      2017: 'mapToCloudExample_fullvis_2017_18'
    },
    wc3: {
      2017: 'mapToCloudExample_fullvis',
      2018: 'mapToCloudExample_fullvis_2017_18'
    }
  },
  IrrigatedAreaRabi: {
    wc1: {
      2015: 'IrrAreaRabi_wc123_2015_z14',
      2016: 'IrrAreaRabi_wc123_2016_z14'
    },
    wc2: {
      2016: 'IrrAreaRabi_wc123_2016_z14',
      2017: 'IrrAreaRabi_wc123_2017_z14'
    },
    wc3: {
      2017: 'IrrAreaRabi_wc123_2017_z14',
      2018: 'IrrAreaRabi_wc123_2018_z14'
    }
  },
  SoilMoistureIndexOct: {
    wc1: {
      2015: '',
      2016: 'smClasses_Oct2016_wc123_z14'
    },
    wc2: {
      2016: 'smClasses_Oct2016_wc123_z14',
      2017: 'smClasses_Oct2017_wc123_z14'
    },
    wc3: {
      2017: 'smClasses_Oct2017_wc123_z14',
      2018: 'smClasses_Oct2018_wc123_z14'
    }
  },
  SoilMoistureIndexNov: {
    wc1: {
      2015: '',
      2016: 'smClasses_Nov2016_wc123_z14'
    },
    wc2: {
      2016: 'smClasses_Nov2016_wc123_z14',
      2017: 'smClasses_Nov2017_wc123_z14'
    },
    wc3: {
      2017: 'smClasses_Nov2017_wc123_z14',
      2018: 'smClasses_Nov2018_wc123_z14'
    }
  }
};

module.exports = {
  MapTiles: {
    LandUse: {
      wc1: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc1['2015'] +
          '/{z}/{x}/{y}',
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc1['2015'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc2['2015'] +
          '/{z}/{x}/{y}',
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc2['2015'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc3['2015'] +
          '/{z}/{x}/{y}',
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc3['2015'] +
          '/{z}/{x}/{y}'
      }
    },
    SownAreaKharif: {
      wc1: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc1['2015'] +
          '/{z}/{x}/{y}',
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc1['2016'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc2['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc2['2017'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc3['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc3['2018'] +
          '/{z}/{x}/{y}'
      }
    },
    SownAreaRabi: {
      wc1: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc1['2015'] +
          '/{z}/{x}/{y}',
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc1['2016'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc2['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc2['2017'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc3['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc3['2018'] +
          '/{z}/{x}/{y}'
      }
    },
    IrrigatedAreaKharif: {
      wc1: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc1['2015'] +
          '/{z}/{x}/{y}',
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc1['2016'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc2['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc2['2017'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc3['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc3['2018'] +
          '/{z}/{x}/{y}'
      }
    },
    IrrigatedAreaRabi: {
      wc1: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc1['2015'] +
          '/{z}/{x}/{y}',
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc1['2016'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc2['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc2['2017'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc3['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc3['2018'] +
          '/{z}/{x}/{y}'
      }
    },
    SoilMoistureIndexOct: {
      wc1: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexOct.wc1['2015'] +
          '/{z}/{x}/{y}',
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexOct.wc1['2016'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexOct.wc2['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexOct.wc2['2017'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexOct.wc3['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexOct.wc3['2018'] +
          '/{z}/{x}/{y}'
      }
    },
    SoilMoistureIndexNov: {
      wc1: {
        '2015':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexNov.wc1['2015'] +
          '/{z}/{x}/{y}',
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexNov.wc1['2016'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexNov.wc2['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexNov.wc2['2017'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexNov.wc3['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexNov.wc3['2018'] +
          '/{z}/{x}/{y}'
      }
    }
  },
  MapInfo: {
    LandUse: {
      Legend: {
        Water: '#0000FF',
        Grassland: '#87FF3D',
		Shrubland: '#E3A534',
        BuiltUp: '#FF0000',
		Barren: "#F2C167",
        Agriculture: '#F4F73B',
		Forest: '#2C8720'
      },
      Description: "<h3>Land Use Maps</h3>"+ 
      "<p>A <i>landuse/landcover</i> (LULC) is a map type to quickly and visually gain insights into the land area covered by common land classes. Most LULC maps have 5-7 land classes. The maps displayed above have seven classes - 'built up'(urban), 'barren', 'agriculture', 'grassland', 'shrubland', 'forest' and 'water'. The map on the right displays the land use/land cover types existing in the chosen Paani Foundation <i>Water Cup</i> village and the table below displays the area (in Hectares) of each land category for the same village. Classification accuracies for these LULC maps are 85% on average, comparable with current accuracies achieved in remote sensing literature.</p>"+
      "<p>Land use/land cover maps have been developed for only the year 2015 for all Water Cup villages. Hence the left panel (2005) is intentionally left blank.</p>"
    },
    SownArea: {
      Legend: {
        Fallow: '#603B33',
        Sown: '#39A115'
      },
      Description: "<h3>Sown Area Maps</h3>"+ 
      "<p>A <i>sown area</i> map is a binary classification map with the two categories being 'sown' or 'fallow'. In this map above, only the land classified as 'agriculture' in the landuse/landcover map is displayed and the remaining pixels are masked or hidden. Among the 'agriculture' pixels each pixel is assigned a colour; green - if sown during the Rabi season and brown - if fallow during the Rabi season. For the purposes of this analysis the Rabi season is considered as November 1st until January 31st.</p>"+ 
      "<p>The map panel on the left displays the sown area map of the Rabi season prior to the Water Cup intervention and the panel on the right displays the sown area in the Rabi season immediately after intervention. The table below displays the area (in Hectares) of sown and fallow land in the village in the Rabi seasons before and after intervention.</p>"
    },
    IrrigatedArea: {
      Legend: {
        'Low': '#FE1C00',
        'Medium': '#F2FF17',
        'High': '#3449E7'
      },
      Description: "<h3>Irrigated Area Maps</h3>"+ 
      "<p>The <i>irrigated area</i> maps displayed above are an estimate of the <i>'Vegetation Water Content'</i> for crops sown in the Rabi season. Hence only the pixels of land classified as 'sown' in the sown area maps are analysed and the remaining pixels are masked or hidden. Of the 'sown' pixels, the colours red, yellow and blue indicated low, medium and high vegetation water content respectively. Vegetation water content here is a proxy used to understand the quantum of applied water (irrigation) to the crops sown.</p>"+ 
      "<p>The map panel on the right displays the irrigated area map of the Rabi season prior to the Water Cup intervention and the panel on the right displays the irrigated area map for the Rabi season immediately after intervention. The table below displays the area (in Hectares) of land in the village under each category (i.e. low, medium and high vegetation water content) in the Rabi seasons before and after intervention.</p>"
    },

    SoilMoistureIndexOct: {
      Legend: {
        '0-25': '#832803',
        '25-75': '#E9EFD9',
        '75-100': '#1B2773'
      },
      Description: "<h3>Soil Moisture Maps</h3>"+ 
      "<p>The soil moisture maps displayed above are an derived by a change detection approach. i.e. October 1st 2016 until May 31st 2017 provides the reference time period. The <i>Soil Moisture Index</i> is a unitless score against each pixel, which is a comparison of the current soil moisture estimate with respect to the 'wettest' and 'driest' day during the reference time period. Hence an index score of 100 indicates that the soil moisture in the land pixel in the chosen month (October/November) is equal to the highest soil moisture during the reference period. Conversely an index score of 0 indicates soil moisture equal to the lowest vis-a-vis the reference time period.</p>"+ 
      "<p>The change detection approach is a widely used method for soil moisture estimation since it provides an estimate of soil moisture without requiring detailed location specific calibration. The downside however is that change detection doesn't work well over land classes with heavy vegetation. Hence the maps above mask out (hide) all pixels which are 'sown' in the chosen Rabi season. It also masks out 'built up', 'forest' and 'water' pixels. The soil moisture estimates hence are developed only for the barren/grassland/shrubland land classes as well as fallow land (Rabi season).</p>"+ 
      "<p>The map panel on the left displays the soil moisture score in the chosen month (October/November) prior to the Water Cup intervention and the panel on the right displays the soil moisture score in the same month immediately after intervention. The table below displays the median soil moisture score in the village in the months of October/November before and after intervention.</p>"
    },
    SoilMoistureIndexNov: {
      Legend: {
        '0-25': '#832803',
        '25-75': '#E9EFD9',
        '75-100': '#1B2773'
      },
      Description: "<h3>Soil Moisture Maps</h3>"+ 
      "<p>The soil moisture maps displayed above are an derived by a change detection approach. i.e. October 1st 2016 until May 31st 2017 provides the reference time period. The <i>Soil Moisture Index</i> is a unitless score against each pixel, which is a comparison of the current soil moisture estimate with respect to the 'wettest' and 'driest' day during the reference time period. Hence an index score of 100 indicates that the soil moisture in the land pixel in the chosen month (October/November) is equal to the highest soil moisture during the reference period. Conversely an index score of 0 indicates soil moisture equal to the lowest vis-a-vis the reference time period.</p>"+ 
      "<p>The change detection approach is a widely used method for soil moisture estimation since it provides an estimate of soil moisture without requiring detailed location specific calibration. The downside however is that change detection doesn't work well over land classes with heavy vegetation. Hence the maps above mask out (hide) all pixels which are 'sown' in the chosen Rabi season. It also masks out 'built up', 'forest' and 'water' pixels. The soil moisture estimates hence are developed only for the barren/grassland/shrubland land classes as well as fallow land (Rabi season).</p>"+ 
      "<p>The map panel on the left displays the soil moisture score in the chosen month (October/November) prior to the Water Cup intervention and the panel on the right displays the soil moisture score in the same month immediately after intervention. The table below displays the median soil moisture score in the village in the months of October/November before and after intervention.</p>"
    }
  },
  csvFileURLs: {
    LandUse:
      'https://storage.googleapis.com/' +
      csvBucketName +
      '/' +
      csvBucketFolder +
      '/' +
      csvFiles.LandUse +
      '.csv',

    SownAreaKharif:
      'https://storage.googleapis.com/' +
      csvBucketName +
      '/' +
      csvBucketFolder +
      '/' +
      csvFiles.SownAreaKharif +
      '.csv',
    SownAreaRabi:
      'https://storage.googleapis.com/' +
      csvBucketName +
      '/' +
      csvBucketFolder +
      '/' +
      csvFiles.SownAreaRabi +
      '.csv',
    IrrigatedAreaRabi:
      'https://storage.googleapis.com/' +
      csvBucketName +
      '/' +
      csvBucketFolder +
      '/' +
      csvFiles.IrrigatedAreaRabi +
      '.csv',
    IrrigatedAreaRabi:
      'https://storage.googleapis.com/' +
      csvBucketName +
      '/' +
      csvBucketFolder +
      '/' +
      csvFiles.IrrigatedAreaKharif +
      '.csv',
    SoilMoistureIndexNov:
      'https://storage.googleapis.com/' +
      csvBucketName +
      '/' +
      csvBucketFolder +
      '/' +
      csvFiles.SoilMoistureIndexNov +
      '.csv',
    SoilMoistureIndexOct:
      'https://storage.googleapis.com/' +
      csvBucketName +
      '/' +
      csvBucketFolder +
      '/' +
      csvFiles.SoilMoistureIndexOct +
      '.csv'
  }
};
