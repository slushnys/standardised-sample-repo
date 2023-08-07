/**
 * Generated by Ajv https://ajv.js.org/guide/managing-schemas.html#standalone-validation-code 
 * eslint-disable
 */
const schema11={"$schema":"http://json-schema.org/draft-07/schema#","title":"IncomingBody","type":"object","properties":{"loyalty":{"$ref":"#/$defs/Loyalty"}},"required":["loyalty"],"additionalProperties":true,"$defs":{"Loyalty":{"type":"object","properties":{"id":{"type":"string"},"beans":{"type":"number"}},"required":["beans"],"additionalProperties":true,"title":"Loyalty"}}};const schema12={"type":"object","properties":{"id":{"type":"string"},"beans":{"type":"number"}},"required":["beans"],"additionalProperties":true,"title":"Loyalty"};function validate10(data,{instancePath="",parentData,parentDataProperty,rootData=data}={}){let vErrors=null;let errors=0;if(errors===0){if(data&&typeof data=="object"&&!Array.isArray(data)){let missing0;if(data.loyalty===void 0&&(missing0="loyalty")){validate10.errors=[{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty:missing0},message:"must have required property '"+missing0+"'"}];return false}else{if(data.loyalty!==void 0){let data0=data.loyalty;const _errs3=errors;if(errors===_errs3){if(data0&&typeof data0=="object"&&!Array.isArray(data0)){let missing1;if(data0.beans===void 0&&(missing1="beans")){validate10.errors=[{instancePath:instancePath+"/loyalty",schemaPath:"#/$defs/Loyalty/required",keyword:"required",params:{missingProperty:missing1},message:"must have required property '"+missing1+"'"}];return false}else{if(data0.id!==void 0){const _errs6=errors;if(typeof data0.id!=="string"){validate10.errors=[{instancePath:instancePath+"/loyalty/id",schemaPath:"#/$defs/Loyalty/properties/id/type",keyword:"type",params:{type:"string"},message:"must be string"}];return false}var valid2=_errs6===errors}else{var valid2=true}if(valid2){if(data0.beans!==void 0){let data2=data0.beans;const _errs8=errors;if(!(typeof data2=="number"&&isFinite(data2))){validate10.errors=[{instancePath:instancePath+"/loyalty/beans",schemaPath:"#/$defs/Loyalty/properties/beans/type",keyword:"type",params:{type:"number"},message:"must be number"}];return false}var valid2=_errs8===errors}else{var valid2=true}}}}else{validate10.errors=[{instancePath:instancePath+"/loyalty",schemaPath:"#/$defs/Loyalty/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}}}}else{validate10.errors=[{instancePath,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}];return false}}validate10.errors=vErrors;return errors===0};validate10.schema=schema11;export{validate10};
