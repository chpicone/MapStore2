/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ADD_FILTER_FIELD = 'ADD_FILTER_FIELD';
const REMOVE_FILTER_FIELD = 'REMOVE_FILTER_FIELD';
const UPDATE_FILTER_FIELD = 'UPDATE_FILTER_FIELD';
const UPDATE_EXCEPTION_FIELD = 'UPDATE_EXCEPTION_FIELD';
const ADD_GROUP_FIELD = 'ADD_GROUP_FIELD';
const UPDATE_LOGIC_COMBO = 'UPDATE_LOGIC_COMBO';
const REMOVE_GROUP_FIELD = 'REMOVE_GROUP_FIELD';
const CHANGE_CASCADING_VALUE = 'CHANGE_CASCADING_VALUE';
const EXPAND_ATTRIBUTE_PANEL = 'EXPAND_ATTRIBUTE_PANEL';
const EXPAND_SPATIAL_PANEL = 'EXPAND_SPATIAL_PANEL';
const SELECT_SPATIAL_METHOD = 'SELECT_SPATIAL_METHOD';
const SELECT_VIEWPORT_SPATIAL_METHOD = 'SELECT_VIEWPORT_SPATIAL_METHOD';
const UPDATE_GEOMETRY = 'UPDATE_GEOMETRY';
const SELECT_SPATIAL_OPERATION = 'SELECT_SPATIAL_OPERATION';
const CHANGE_SPATIAL_ATTRIBUTE = 'CHANGE_SPATIAL_ATTRIBUTE';
const REMOVE_SPATIAL_SELECT = 'REMOVE_SPATIAL_SELECT';
const SHOW_SPATIAL_DETAILS = 'SHOW_SPATIAL_DETAILS';
const QUERY_FORM_SEARCH = 'QUERY_FORM_SEARCH';
const QUERY_FORM_RESET = 'QUERY_FORM_RESET';
// const WFS_LOAD_ERROR = 'WFS_LOAD_ERROR';
const SHOW_GENERATED_FILTER = 'SHOW_GENERATED_FILTER';
const CHANGE_DWITHIN_VALUE = 'CHANGE_DWITHIN_VALUE';

const ZONE_SEARCH = 'ZONE_SEARCH';
const ZONE_SEARCH_ERROR = 'ZONE_SEARCH_ERROR';
const ZONE_FILTER = 'ZONE_FILTER';

// const OPEN_MENU = 'OPEN_MENU';

const ZONE_CHANGE = 'ZONE_CHANGE';
const ZONES_RESET = 'ZONES_RESET';

const SIMPLE_FILTER_FIELD_UPDATE = 'SIMPLE_FILTER_FIELD_UPDATE';
const ADD_SIMPLE_FILTER_FIELD = 'ADD_SIMPLE_FILTER_FIELD';
const REMOVE_SIMPLE_FILTER_FIELD = 'REMOVE_SIMPLE_FILTER_FIELD';
const REMOVE_ALL_SIMPLE_FILTER_FIELDS = 'REMOVE_ALL_SIMPLE_FILTER_FIELDS';
const UPDATE_FILTER_FIELD_OPTIONS = 'UPDATE_FILTER_FIELD_OPTIONS';
const LOADING_FILTER_FIELD_OPTIONS = 'LOADING_FILTER_FIELD_OPTIONS';
const SET_AUTOCOMPLETE_MODE = 'SET_AUTOCOMPLETE_MODE';
const TOGGLE_AUTOCOMPLETE_MENU = 'TOGGLE_AUTOCOMPLETE_MENU';
const LOAD_FILTER = 'QUERYFORM:LOAD_FILTER';

const axios = require('../libs/ajax');

function addFilterField(groupId) {
    return {
        type: ADD_FILTER_FIELD,
        groupId: groupId
    };
}

function addGroupField(groupId, index) {
    return {
        type: ADD_GROUP_FIELD,
        groupId: groupId,
        index: index
    };
}

function removeFilterField(rowId) {
    return {
        type: REMOVE_FILTER_FIELD,
        rowId: rowId
    };
}

function toggleMenu(rowId, status) {
    return {
        type: TOGGLE_AUTOCOMPLETE_MENU,
        rowId,
        status
    };
}

function updateFilterField(rowId, fieldName, fieldValue, fieldType, fieldOptions = {}) {
    return {
        type: UPDATE_FILTER_FIELD,
        rowId: rowId,
        fieldName: fieldName,
        fieldValue: fieldValue,
        fieldType: fieldType,
        fieldOptions
    };
}

function updateExceptionField(rowId, message) {
    return {
        type: UPDATE_EXCEPTION_FIELD,
        rowId: rowId,
        exceptionMessage: message
    };
}

function updateLogicCombo(groupId, logic) {
    return {
        type: UPDATE_LOGIC_COMBO,
        groupId: groupId,
        logic: logic
    };
}

function setAutocompleteMode(status) {
    return {
        type: SET_AUTOCOMPLETE_MODE,
        status
    };
}

function removeGroupField(groupId) {
    return {
        type: REMOVE_GROUP_FIELD,
        groupId: groupId
    };
}

function changeCascadingValue(attributes) {
    return {
        type: CHANGE_CASCADING_VALUE,
        attributes: attributes
    };
}

function expandAttributeFilterPanel(expand) {
    return {
        type: EXPAND_ATTRIBUTE_PANEL,
        expand: expand
    };
}

function expandSpatialFilterPanel(expand) {
    return {
        type: EXPAND_SPATIAL_PANEL,
        expand: expand
    };
}

function selectSpatialMethod(method, fieldName) {
    return {
        type: SELECT_SPATIAL_METHOD,
        fieldName: fieldName,
        method: method
    };
}

function selectViewportSpatialMethod() {
    return {
        type: SELECT_VIEWPORT_SPATIAL_METHOD
    };
}
function updateGeometrySpatialField(geometry) {
    return {
        type: UPDATE_GEOMETRY,
        geometry
    };
}

function selectSpatialOperation(operation, fieldName) {
    return {
        type: SELECT_SPATIAL_OPERATION,
        fieldName: fieldName,
        operation: operation
    };
}

function changeSpatialAttribute(attribute) {
    return {
        type: CHANGE_SPATIAL_ATTRIBUTE,
        attribute
    };
}

function removeSpatialSelection() {
    return {
        type: REMOVE_SPATIAL_SELECT
    };
}

function showSpatialSelectionDetails(show) {
    return {
        type: SHOW_SPATIAL_DETAILS,
        show: show
    };
}

function changeDwithinValue(distance) {
    return {
        type: CHANGE_DWITHIN_VALUE,
        distance: distance
    };
}

/* function querySearchResponse(response) {
    return {
        type: QUERY_FORM_SEARCH,
        response: response
    };
}
function wfsLoadError(e) {
    return {
        type: WFS_LOAD_ERROR,
        error: e
    };
}*/

function search(searchUrl, filterObj) {
    return {
        type: QUERY_FORM_SEARCH,
        searchUrl,
        filterObj
    };
}

function loadFilter(filter) {
    return {
        type: LOAD_FILTER,
        filter
    };
}
function query(seachURL, data) {
    return {
        type: SHOW_GENERATED_FILTER,
        data: data
    };
    /* return (dispatch) => {
        return axios.post(seachURL, data).then((response) => {
            dispatch(querySearchResponse(response.data));
        }).catch((e) => {
            dispatch(wfsLoadError(e));
        });
    };*/
}

function reset() {
    return {
        type: QUERY_FORM_RESET
    };
}

function resetZones() {
    return {
        type: ZONES_RESET
    };
}

function zoneFilter(searchResult, id) {
    return {
        type: ZONE_FILTER,
        data: searchResult,
        id: id
    };
}

function zoneSearchError(error, id) {
    return {
        type: ZONE_SEARCH_ERROR,
        error: error,
        id: id
    };
}

function zoneSearch(active, id) {
    return {
        type: ZONE_SEARCH,
        active: active,
        id: id
    };
}

function zoneGetValues(url, filter, id) {
    return (dispatch) => {
        return axios.post(url, filter, {
            timeout: 10000,
            headers: {'Accept': 'application/json', 'Content-Type': 'text/plain'}
        }).then((response) => {
            let config = response.data;
            if (typeof config !== "object") {
                try {
                    config = JSON.parse(config);
                } catch (e) {
                    dispatch(zoneSearchError('Search result broken (' + url + ":   " + filter + '): ' + e.message, id));
                }
            }

            dispatch(zoneFilter(config, id));
            dispatch(zoneSearch(false, id));
        }).catch((e) => {
            dispatch(zoneSearchError(e, id));
        });
    };
}

/* function openMenu(active, id) {
    return {
        type: OPEN_MENU,
        active: active,
        id: id
    };
}*/

function zoneChange(id, value) {
    return {
        type: ZONE_CHANGE,
        id: id,
        value: value
    };
}

function simpleFilterFieldUpdate(id, properties) {
    return {
        type: SIMPLE_FILTER_FIELD_UPDATE,
        id,
        properties
    };
}

function addSimpleFilterField(properties) {
    return {
        type: ADD_SIMPLE_FILTER_FIELD,
        properties
    };
}

function removeSimpleFilterField(id) {
    return {
        type: REMOVE_SIMPLE_FILTER_FIELD,
        id
    };
}

function removeAllSimpleFilterFields() {
    return {
        type: REMOVE_ALL_SIMPLE_FILTER_FIELDS
    };
}

function loadingFilterFieldOptions(status, filterField) {
    return {
        type: LOADING_FILTER_FIELD_OPTIONS,
        status,
        filterField
    };
}

function updateFilterFieldOptions(filterField, options, valuesCount) {
    return {
        type: UPDATE_FILTER_FIELD_OPTIONS,
        filterField,
        options,
        valuesCount
    };
}

module.exports = {
    ADD_FILTER_FIELD,
    REMOVE_FILTER_FIELD,
    UPDATE_FILTER_FIELD,
    UPDATE_EXCEPTION_FIELD,
    ADD_GROUP_FIELD,
    UPDATE_LOGIC_COMBO,
    REMOVE_GROUP_FIELD,
    CHANGE_CASCADING_VALUE,
    EXPAND_ATTRIBUTE_PANEL,
    EXPAND_SPATIAL_PANEL,
    SELECT_SPATIAL_METHOD,
    SELECT_SPATIAL_OPERATION,
    CHANGE_SPATIAL_ATTRIBUTE,
    REMOVE_SPATIAL_SELECT,
    SHOW_SPATIAL_DETAILS,
    QUERY_FORM_SEARCH,
    QUERY_FORM_RESET,
    // WFS_LOAD_ERROR,
    SHOW_GENERATED_FILTER,
    CHANGE_DWITHIN_VALUE,
    ZONE_SEARCH,
    ZONE_SEARCH_ERROR,
    ZONE_FILTER,
    // OPEN_MENU,
    ZONE_CHANGE,
    ZONES_RESET,
    SIMPLE_FILTER_FIELD_UPDATE,
    ADD_SIMPLE_FILTER_FIELD,
    REMOVE_SIMPLE_FILTER_FIELD,
    REMOVE_ALL_SIMPLE_FILTER_FIELDS,
    SELECT_VIEWPORT_SPATIAL_METHOD,
    UPDATE_GEOMETRY,
    UPDATE_FILTER_FIELD_OPTIONS,
    LOADING_FILTER_FIELD_OPTIONS,
    SET_AUTOCOMPLETE_MODE,
    TOGGLE_AUTOCOMPLETE_MENU,
    LOAD_FILTER,
    setAutocompleteMode,
    loadingFilterFieldOptions,
    updateGeometrySpatialField,
    selectViewportSpatialMethod,
    resetZones,
    zoneChange,
    search,
    loadFilter,
    zoneSearch,
    zoneSearchError,
    zoneFilter,
    zoneGetValues,
    addFilterField,
    removeFilterField,
    updateFilterField,
    updateExceptionField,
    addGroupField,
    updateLogicCombo,
    removeGroupField,
    changeCascadingValue,
    expandAttributeFilterPanel,
    expandSpatialFilterPanel,
    selectSpatialMethod,
    selectSpatialOperation,
    changeSpatialAttribute,
    removeSpatialSelection,
    showSpatialSelectionDetails,
    query,
    reset,
    changeDwithinValue,
    simpleFilterFieldUpdate,
    addSimpleFilterField,
    removeSimpleFilterField,
    removeAllSimpleFilterFields,
    updateFilterFieldOptions,
    toggleMenu
    // wfsLoadError,
    // querySearchResponse
};
