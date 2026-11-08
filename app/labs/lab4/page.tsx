"use client";

import "@/app/labs/lab2/tailwind/utilities.css";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ProfileForm from "./profile/ProfileForm";
import ParentStateComponent from "./ParentStateComponent";
import PropDrilling from "./PropDrilling";
import UrlEncoding from "./UrlEncoding";

const sayHello = (msg: string) => {
    alert(msg);
};

const sayMyName = () => {
    alert("Mehbubul Hasan Al-Quvi");
}

const sayOther = () => {
    alert("Sample from parent");
};

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions message="Hello from Lab 4" theFunction={sayHello} nameFunction={sayMyName} theOtherFunction={sayOther} />
      <CounterBroken/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ProfileForm/>
      <ParentStateComponent/>
      <PropDrilling/>
      <UrlEncoding/>
    </div>
  );
}