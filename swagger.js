const petTypeRequestBody = {
  type: 'object',
  properties: {
    label: {
      type: 'string',
      description: 'Pet Type'
    }
  },
  required: ['label'],
  example: {
    label: 'Dog'
  }
};
const petTypeResponseBody = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Pet Type Id'
    },
    label: {
      type: 'string',
      description: 'Pet Type'
    },
    createDate: {
      type: 'string',
      description: 'Created Date'
    },
    updateDate: {
      type: 'string',
      description: 'Updated Date'
    },
    __v: {
      type: 'number',
      description: 'Version'
    }
  }
};

const characterRequestBody = {
  type: 'object',
  properties: {
    label: {
      type: 'string',
      description: 'Character'
    }
  },
  required: ['label'],
  example: {
    label: 'Cute'
  }
};
const characterResponseBody = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Character Id'
    },
    label: {
      type: 'string',
      description: 'Character'
    },
    createDate: {
      type: 'string',
      description: 'Created Date'
    },
    updateDate: {
      type: 'string',
      description: 'Updated Date'
    },
    __v: {
      type: 'number',
      description: 'Version'
    }
  }
};

const petRequestBody = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Pet Name'
    },
    age: {
      type: 'number',
      description: 'Pet Age'
    },
    petType: {
      type: 'string',
      description: 'Pet Type Id'
    },
    character: {
      type: 'string',
      description: 'Character Id'
    },
    about: {
      type: 'string',
      description: 'About Pet'
    },
    favorite: {
      type: 'string',
      description: 'Favorite'
    },
    image: {
      type: 'string',
      description: 'Image'
    },
    loveCount: {
      type: 'number',
      description: 'Love Count'
    }
  },
  required: ['name', 'age', 'petType', 'character', 'about', 'favorite'],
  example: {
    name: 'Tommy',
    age: 2,
    petType: '5f9e1b3b9d9b1b1b1b1b1b1b',
    character: '5f9e1b3b9d9b1b1b1b1b1b1b',
    about: 'Tommy is a cute dog',
    favorite: 'Tommy loves to play with kids',
    image: 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg',
    loveCount: 0
  }
};
const petResponseBody = {
  type: 'object',
  properties: {
    _id: {
      type: 'string',
      description: 'Pet Id'
    },
    name: {
      type: 'string',
      description: 'Pet Name'
    },
    age: {
      type: 'number',
      description: 'Pet Age'
    },
    petType: {
      type: 'string',
      description: 'Pet Type Id'
    },
    character: {
      type: 'string',
      description: 'Character Id'
    },
    about: {
      type: 'string',
      description: 'About Pet'
    },
    favorite: {
      type: 'string',
      description: 'Favorite'
    },
    image: {
      type: 'string',
      description: 'Image'
    },
    loveCount: {
      type: 'number',
      description: 'Love Count'
    },
    createDate: {
      type: 'string',
      description: 'Created Date'
    },
    updateDate: {
      type: 'string',
      description: 'Updated Date'
    },
    __v: {
      type: 'number',
      description: 'Version'
    }
  }
};

module.exports = {
  openapi: '3.1.0',
  info: {
    version: '1.0.0',
    title: 'Pet Fair',
    description: 'Node JS + Express + Mongoose + MongoDB',
    contact: { email: 'rahathossenmanik@gmail.com' },
    license: { name: 'MIT', url: 'https://opensource.org/licenses/MIT' }
  },
  paths: {
    '/characters/getall': {
      get: {
        tags: ['Characters'],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: characterResponseBody
                }
              }
            }
          }
        }
      }
    },
    '/characters/getbyid/{id}': {
      get: {
        tags: ['Characters'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Character Id',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: characterResponseBody
              }
            }
          }
        }
      }
    },
    '/characters/create': {
      post: {
        tags: ['Characters'],
        requestBody: {
          content: {
            'application/json': {
              schema: characterRequestBody
            }
          }
        },
        responses: {
          200: {
            content: {
              'application/json': {
                schema: characterResponseBody
              }
            }
          }
        }
      }
    },
    '/characters/update/{id}': {
      put: {
        tags: ['Characters'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Character Id',
            schema: {
              type: 'string'
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: characterRequestBody
            }
          }
        },
        responses: {
          200: {
            content: {
              'application/json': {
                schema: characterResponseBody
              }
            }
          }
        }
      }
    },
    '/characters/delete/{id}': {
      delete: {
        tags: ['Characters'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Character Id',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: characterResponseBody
              }
            }
          }
        }
      }
    },
    '/petTypes/getall': {
      get: {
        tags: ['PetTypes'],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: petTypeResponseBody
                }
              }
            }
          }
        }
      }
    },
    '/petTypes/getbyid/{id}': {
      get: {
        tags: ['PetTypes'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Pet Type Id',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petTypeResponseBody
              }
            }
          }
        }
      }
    },
    '/petTypes/create': {
      post: {
        tags: ['PetTypes'],
        requestBody: {
          content: {
            'application/json': {
              schema: petTypeRequestBody
            }
          }
        },
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petTypeResponseBody
              }
            }
          }
        }
      }
    },
    '/petTypes/update/{id}': {
      put: {
        tags: ['PetTypes'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Pet Type Id',
            schema: {
              type: 'string'
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: petTypeRequestBody
            }
          }
        },
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petTypeResponseBody
              }
            }
          }
        }
      }
    },
    '/petTypes/delete/{id}': {
      delete: {
        tags: ['PetTypes'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Pet Type Id',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petTypeResponseBody
              }
            }
          }
        }
      }
    },
    '/pets/getall': {
      get: {
        tags: ['Pets'],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: petResponseBody
                }
              }
            }
          }
        }
      }
    },
    '/pets/getbyid/{id}': {
      get: {
        tags: ['Pets'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Pet Id',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petResponseBody
              }
            }
          }
        }
      }
    },
    '/pets/create': {
      post: {
        tags: ['Pets'],
        requestBody: {
          content: {
            'application/json': {
              schema: petRequestBody
            }
          }
        },
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petResponseBody
              }
            }
          }
        }
      }
    },
    '/pets/update/{id}': {
      put: {
        tags: ['Pets'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Pet Id',
            schema: {
              type: 'string'
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: petRequestBody
            }
          }
        },
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petResponseBody
              }
            }
          }
        }
      }
    },
    '/pets/delete/{id}': {
      delete: {
        tags: ['Pets'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Pet Id',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petResponseBody
              }
            }
          }
        }
      }
    },
    '/pets/getalldog': {
      get: {
        tags: ['Pets'],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: petResponseBody
                }
              }
            }
          }
        }
      }
    },
    '/pets/getallcat': {
      get: {
        tags: ['Pets'],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: petResponseBody
                }
              }
            }
          }
        }
      }
    },
    '/pets/getallbird': {
      get: {
        tags: ['Pets'],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: petResponseBody
                }
              }
            }
          }
        }
      }
    },
    '/pets/getallreptile': {
      get: {
        tags: ['Pets'],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: petResponseBody
                }
              }
            }
          }
        }
      }
    },
    '/pets/love/{id}': {
      put: {
        tags: ['Pets'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Pet Id',
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            content: {
              'application/json': {
                schema: petResponseBody
              }
            }
          }
        }
      }
    }
  },
  consumes: ['application/json'],
  produces: ['application/json']
};
