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
      2016: 'mapToCloudExample_fullvis',
      2017: 'mapToCloudExample_fullvis_2017_18'
    },
    wc2: {
      2017: 'mapToCloudExample_fullvis',
      2018: 'mapToCloudExample_fullvis_2017_18'
    },
    wc3: {
      2018: 'mapToCloudExample_fullvis',
      2019: 'mapToCloudExample_fullvis_2017_18'
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
      2016: 'mapToCloudExample_fullvis',
      2017: 'mapToCloudExample_fullvis_2017_18'
    },
    wc2: {
      2017: 'mapToCloudExample_fullvis',
      2018: 'mapToCloudExample_fullvis_2017_18'
    },
    wc3: {
      2018: 'mapToCloudExample_fullvis',
      2019: 'mapToCloudExample_fullvis_2017_18'
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
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc1['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc1['2017'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc2['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc2['2018'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc3['2018'] +
          '/{z}/{x}/{y}',
        '2019':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaKharif.wc3['2019'] +
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
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc1['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc1['2017'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc2['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc2['2018'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc3['2018'] +
          '/{z}/{x}/{y}',
        '2019':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaKharif.wc3['2019'] +
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
      Description: 'Land Use Maps'
    },
    SownArea: {
      Legend: {
        Fallow: '#603B33',
        Sown: '#39A115'
      },
      Description: 'Sown area Maps'
    },
    IrrigatedArea: {
      Legend: {
        'Low': '#FE1C00',
        'Medium': '#F2FF17',
        'High': '#3449E7'
      },
      Description: 'IrrigatedArea Maps'
    },

    SoilMoistureIndexOct: {
      Legend: {
        '0-25': '#832803',
        '25-75': '#E9EFD9',
        '75-100': '#1B2773'
      },
      Description: 'Soil Moisture Oct Maps'
    },
    SoilMoistureIndexNov: {
      Legend: {
        '0-25': '#832803',
        '25-75': '#E9EFD9',
        '75-100': '#1B2773'
      },
      Description: 'Soil Moisture Nov Maps'
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
