var main_config = require('../../main_config');
const bucketName = main_config.mapTilesBucket;
const bucketFolders = {
  LandUse: {
    wc1: {
      2006: 'mapToCloudExample_fullvis',
      2016: 'mapToCloudExample_fullvis_2017_18'
    },
    wc2: {
      2007: 'mapToCloudExample_fullvis',
      2017: 'mapToCloudExample_fullvis_2017_18'
    },
    wc3: {
      2008: 'mapToCloudExample_fullvis',
      2018: 'mapToCloudExample_fullvis_2017_18'
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
  SoilMoistureIndexJune: {
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
  SoilMoistureIndexJan: {
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
  }
};

module.exports = {
  MapTiles: {
    LandUse: {
      wc1: {
        '2006':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc1['2006'] +
          '/{z}/{x}/{y}',
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc1['2016'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2007':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc2['2007'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc2['2017'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2008':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc3['2008'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.LandUse.wc3['2018'] +
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
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc1['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc1['2017'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc2['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc2['2018'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc3['2018'] +
          '/{z}/{x}/{y}',
        '2019':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SownAreaRabi.wc3['2019'] +
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
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc1['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc1['2017'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc2['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc2['2018'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc3['2018'] +
          '/{z}/{x}/{y}',
        '2019':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.IrrigatedAreaRabi.wc3['2019'] +
          '/{z}/{x}/{y}'
      }
    },
    SoilMoistureIndexJune: {
      wc1: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJune.wc1['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJune.wc1['2017'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJune.wc2['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJune.wc2['2018'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJune.wc3['2018'] +
          '/{z}/{x}/{y}',
        '2019':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJune.wc3['2019'] +
          '/{z}/{x}/{y}'
      }
    },
    SoilMoistureIndexJan: {
      wc1: {
        '2016':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJan.wc1['2016'] +
          '/{z}/{x}/{y}',
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJan.wc1['2017'] +
          '/{z}/{x}/{y}'
      },
      wc2: {
        '2017':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJan.wc2['2017'] +
          '/{z}/{x}/{y}',
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJan.wc2['2018'] +
          '/{z}/{x}/{y}'
      },
      wc3: {
        '2018':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJan.wc3['2018'] +
          '/{z}/{x}/{y}',
        '2019':
          'https://storage.googleapis.com/' +
          bucketName +
          '/' +
          bucketFolders.SoilMoistureIndexJan.wc3['2019'] +
          '/{z}/{x}/{y}'
      }
    }
  },
  MapInfo: {
    LandUse: {
      Legend: {
        Water: '#5DADE2',
        Grassland: '#BEE60B',
        Builtup: '#000',
        Agriculture: '#0DB11F',
        Forest: '#225215'
      },
      Description: 'Land Use Maps'
    },
    SownArea: {
      Legend: {
        Fallow: '#DEC80D',
        Sown: '#1BB30B'
      },
      Description: 'Sown area Maps'
    },
    IrrigatedArea: {
      Legend: {
        'Non-irrigated': '#676A6B',
        Irrigated: '#30D4EE'
      },
      Description: 'IrrigatedArea Maps'
    },

    SoilMoistureIndexJune: {
      Legend: {
        '0-10': '#676A6B',
        '10-20': '#5DADE2',
        '20-30': '#30D4EE'
      },
      Description: 'Soil Moisture June Maps'
    },
    SoilMoistureIndexJan: {
      Legend: {
        '0-10': '#30D4EE',
        '10-20': '#5DADE2',
        '20-30': '#676A6B'
      },
      Description: 'Soil Moisture Jan Maps'
    }
  }
};
