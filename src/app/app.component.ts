// app.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, UserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit{
  
  firstName:string = "Kamal";
  userForm!:FormGroup;
  private fb:FormBuilder = inject(FormBuilder);
  ngOnInit(): void {
   this.userForm =  this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]]
   })
  }
  onSave(){
    console.log("userForm: " ,this.userForm.value);
    
  }
  count : number=0;

  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }
}
