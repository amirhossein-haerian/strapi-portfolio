import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsItems extends Schema.Component {
  collectionName: 'components_items_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    name: Attribute.String;
    to: Attribute.String;
  };
}

export interface LanguageLanguage extends Schema.Component {
  collectionName: 'components_language_languages';
  info: {
    displayName: 'language';
    icon: 'earth';
  };
  attributes: {
    code: Attribute.String;
    name: Attribute.String;
    image: Attribute.Media;
  };
}

export interface TestTest extends Schema.Component {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'test';
    description: '';
  };
  attributes: {
    test: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.items': ItemsItems;
      'language.language': LanguageLanguage;
      'test.test': TestTest;
    }
  }
}
