import { style } from '@angular/animations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  // var1= 0;
  // var2 = 0;
  // ans=0;
  // day="monday";
  // total(){
  // this.ans=this.var1+this.var2;
  // username: String | undefined
  // password: String | undefined
  // var1 = '';
  // var2 = '';
  // flag = '';
  // login: boolean | undefined;
  // onSubmit() {
  //   if (this.username == 'admin' && this.password == 'admin') {
  //     this.login = true;
  //   }

  //   if (this.login == true) {
  //     this.var1 = 'login sccessful'// Successful login
  //   }

  //   else {
  //     this.var2 = 'login Failed' // Failed login
  //   }
  // }


  // updatevar1(newNum1: string){
  //   console.log('newnum1',newNum1);
  //   this.var1 = parseInt(newNum1);
  //   this.total();
  // }

  // updatevar2(newNum2 : string){
  //   console.log('newnum2',newNum2);
  //   this.var2=parseInt (newNum2);
  //   this.total();
  // }
  errorMsg = '';

  newTask = '';  

  todo: string[] = []; 

  isEdit = false;
  currentTaskIndex = 0;
  
  add(newTask: string) {
    if (newTask.trim() != '') {
      this.todo.push(newTask);
      this.newTask = ''
    } else {
      this.errorMsg = 'Please enter value'
    }
  }

  remove(index: number) {
    this.todo.splice(index, 1);
  }

  edit(index: number) {
    this.isEdit = true;
    this.currentTaskIndex = index;
    this.newTask = this.todo[index];
  }

  save() { 
    this.todo[this.currentTaskIndex] = this.newTask;
    this.isEdit = false;
    this.newTask = '';
  }
  
  cancelEdit() {
    this.isEdit = false;
    this.newTask = '';
  }
}  
 






