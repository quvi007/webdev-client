export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let myTxt = "Hi there! This is another string";
  let myNum = 2441139;
  let myTxtType = typeof myTxt;
  let myNumType = typeof myNum;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let sampleCountType = typeof sampleCount;
  let sampleLabelType = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                    <br />
        myTxt = {myTxt}                             <br />
        myNum = {myNum}                             <br />
        myTxtType = {myTxtType}                     <br />
        myNumType = {myNumType}                     <br />
      sampleCount = {sampleCount}                 <br />
      sampleLabel = {sampleLabel}                 <br />
      sampleCountType = {sampleCountType}         <br />
      sampleLabelType = {sampleLabelType}         <br />
      <hr />
    </div>
  );
}