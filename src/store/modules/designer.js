import { vueFetch } from 'use-lightweight-fetch';

// get images
const {
  handleData: handleGetComponents,
  fetchedData: fetchedComponents,
  isError: isErrorComponents,
  error: errorComponents,
  errors: errorsComponents,
  isLoading: isLoadingComponents,
  isSuccess: isSuccessComponents,
} = vueFetch();

export default {
  namespaced: true,

  // state
  state: {
    menuPreview: false,
    menuRight: true,
    // border style, width & color / start
    borderStyle: null,
    borderWidth: null,
    borderColor: null,
    // border style, width & color / end
    // border radius / start
    borderRadiusGlobal: null,
    borderRadiusTopLeft: null,
    borderRadiusTopRight: null,
    borderRadiusBottomleft: null,
    borderRadiusBottomRight: null,
    // border radius / end
    textAreaVueModel: null,
    nextSibling: null,
    parentElement: null,
    restoredElement: null,
    currentClasses: [],
    fontVerticalPadding: null,
    fontHorizontalPadding: null,
    fontVerticalMargin: null,
    fontHorizontalMargin: null,
    fontStyle: null,
    fontFamily: null,
    fontWeight: null,
    fontBase: null,
    fontDesktop: null,
    fontTablet: null,
    fontMobile: null,
    enabledCustomColorBG: null,
    backgroundColorCustom: null,
    backgroundColor: null,
    component: null,
    components: [],
    currentDisplayedImage: null,
    currentClickedImage: null,
    fetchedComponents: [],
  },

  // getters
  getters: {
    getMenuPreview(state) {
      return state.menuPreview;
    },
    getMenuRight(state) {
      return state.menuRight;
    },

    // border style, width & color / start
    getBorderStyle(state) {
      return state.borderStyle;
    },
    getBorderWidth(state) {
      return state.borderWidth;
    },
    getBorderColor(state) {
      return state.borderColor;
    },
    // border style, width & color / end

    // border radius / start
    getBorderRadiusGlobal(state) {
      return state.borderRadiusGlobal;
    },
    getBorderRadiusTopLeft(state) {
      return state.borderRadiusTopLeft;
    },
    getBorderRadiusTopRight(state) {
      return state.borderRadiusTopRight;
    },
    getBorderRadiusBottomleft(state) {
      return state.borderRadiusBottomleft;
    },
    getBorderRadiusBottomRight(state) {
      return state.borderRadiusBottomRight;
    },
    // border radius / end

    getTextAreaVueModel(state) {
      return state.textAreaVueModel;
    },
    getNextSibling(state) {
      return state.nextSibling;
    },
    getParentElement(state) {
      return state.parentElement;
    },
    getRestoredElement(state) {
      return state.restoredElement;
    },
    getCurrentClasses(state) {
      return state.currentClasses;
    },
    getFontStyle(state) {
      return state.fontStyle;
    },
    getFontVerticalPadding(state) {
      return state.fontVerticalPadding;
    },
    getFontHorizontalPadding(state) {
      return state.fontHorizontalPadding;
    },
    getFontVerticalMargin(state) {
      return state.fontVerticalMargin;
    },
    getFontHorizontalMargin(state) {
      return state.fontHorizontalMargin;
    },
    getFontFamily(state) {
      return state.fontFamily;
    },
    getFontWeight(state) {
      return state.fontWeight;
    },
    getFontBase(state) {
      return state.fontBase;
    },
    getFontDesktop(state) {
      return state.fontDesktop;
    },
    getFontTablet(state) {
      return state.fontTablet;
    },
    getFontMobile(state) {
      return state.fontMobile;
    },
    getBackgroundColor(state) {
      return state.backgroundColor;
    },
    getEnabledCustomColorBG(state) {
      return state.enabledCustomColorBG;
    },
    getBackgroundColorCustom(state) {
      return state.backgroundColorCustom;
    },
    getComponent(state) {
      return state.component;
    },
    // current element
    getComponents(state) {
      return state.components;
    },
    getCurrentClickedImage(state) {
      return state.currentClickedImage;
    },

    //
    getCurrentDisplayedImage(state) {
      // Create a new HTML div
      const currentImageContainer = document.createElement('div');
      // Set the new HTML div equal to the state and current element's outerHTML
      currentImageContainer.innerHTML = state.component?.outerHTML;

      // Get all <img> and <div> elements within the current image container
      const imgElements = currentImageContainer.getElementsByTagName('img');
      const divElements = currentImageContainer.getElementsByTagName('div');

      // Check if there is exactly one <img> element and no <div> elements
      if (imgElements.length === 1 && divElements.length === 0) {
        // Return the source of the only <img> element
        return imgElements[0].src;
      }

      // Return null if the conditions are not met
      return null;
    },
    getFetchedComponents(state) {
      return state.fetchedComponents;
    },
  },

  mutations: {
    setMenuPreview(state, payload) {
      state.menuPreview = payload;
    },
    setMenuRight(state, payload) {
      state.menuRight = payload;
    },

    // border style, width & color / start
    setBorderStyle(state, payload) {
      state.borderStyle = payload;
    },
    setBorderWidth(state, payload) {
      state.borderWidth = payload;
    },
    setBorderColor(state, payload) {
      state.borderColor = payload;
    },
    // border style, width & color / end

    // border radius / start
    setBorderRadiusGlobal(state, payload) {
      state.borderRadiusGlobal = payload;
    },
    setBorderRadiusTopLeft(state, payload) {
      state.borderRadiusTopLeft = payload;
    },
    setBorderRadiusTopRight(state, payload) {
      state.borderRadiusTopRight = payload;
    },
    setBorderRadiusBottomleft(state, payload) {
      state.borderRadiusBottomleft = payload;
    },
    setBorderRadiusBottomRight(state, payload) {
      state.borderRadiusBottomRight = payload;
    },
    // border radius / end
    setTextAreaVueModel(state, payload) {
      state.textAreaVueModel = payload;
    },
    setNextSibling(state, payload) {
      state.nextSibling = payload;
    },
    setParentElement(state, payload) {
      state.parentElement = payload;
    },
    setRestoredElement(state, payload) {
      state.restoredElement = payload;
    },
    setClass(state, payload) {
      state.currentClasses = [...state.currentClasses, payload];
    },
    removeClass(state, payload) {
      state.currentClasses = state.currentClasses.filter(
        (cls) => cls !== payload
      );
    },
    setCurrentClasses(state, payload) {
      state.currentClasses = Array.from(payload);
    },
    setFontVerticalPadding(state, payload) {
      state.fontVerticalPadding = payload;
    },
    setFontHorizontalPadding(state, payload) {
      state.fontHorizontalPadding = payload;
    },
    setFontVerticalMargin(state, payload) {
      state.fontVerticalMargin = payload;
    },
    setFontHorizontalMargin(state, payload) {
      state.fontHorizontalMargin = payload;
    },
    setFontStyle(state, payload) {
      state.fontStyle = payload;
    },
    setFontFamily(state, payload) {
      state.fontFamily = payload;
    },
    setFontWeight(state, payload) {
      state.fontWeight = payload;
    },
    setFontBase(state, payload) {
      state.fontBase = payload;
    },
    setFontDesktop(state, payload) {
      state.fontDesktop = payload;
    },
    setFontTablet(state, payload) {
      state.fontTablet = payload;
    },
    setFontMobile(state, payload) {
      state.fontMobile = payload;
    },
    setBackgroundColor(state, payload) {
      state.backgroundColor = payload;
    },
    setBackgroundColorCustom(state, payload) {
      state.backgroundColorCustom = payload;
    },
    setEnabledCustomColorBG(state, payload) {
      state.enabledCustomColorBG = payload;
    },
    setComponent(state, payload) {
      state.component = {};
      state.component = payload;
    },
    setComponents(state, payload) {
      state.components = {};
      state.components = payload;
    },

    setCurrentClickedImage(state, payload) {
      state.currentClickedImage = payload;
    },

    setCurrentDisplayedImage(state, payload) {
      // set clicked element (which is the image & select the image src) to equal payload
      // payload source is the new image src
      state.component.src = payload;
      // set currebt image
      state.currentDisplayedImage = payload;
    },
    setCurrentLayoutPreview(state, payload) {
      localStorage.setItem('preview', payload);
    },
    setFetchedComponents(state, payload) {
      state.fetchedComponents = payload;
    },
  },

  // actions
  actions: {
    // load products
    loadComponents(context, payload) {
      handleGetComponents(
        '/components.json',
        {},
        {
          additionalCallTime: 300,
          abortTimeoutTime: 8000,
        }
      );

      // context & send to mutation
      context.commit('setFetchedComponents', {
        fetchedData: fetchedComponents,
        isError: isErrorComponents,
        error: errorComponents,
        errors: errorsComponents,
        isLoading: isLoadingComponents,
        isSuccess: isSuccessComponents,
      });
    },
  },
};
