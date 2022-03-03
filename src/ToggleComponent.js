import React, { useState } from 'react';
import { TargetEvent } from 'watcher/dist/enums';


export default class TestHook extends React.Component {
   render() {
     return <div><input
       onChange={(event) => {
          this.setState({input: event.target.value})}}
       type="number" /></div>;
   }
 }
