import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/auth/auth.service';

@Component({
  selector: 'app-post-register',
  templateUrl: './post-register.component.html',
  styleUrls: ['./post-register.component.css']
})
export class PostRegisterComponent implements OnInit {

  formGeneralInfo!: FormGroup;
  formDemograficInfo!: FormGroup;
  formSportInfo!: FormGroup;
  formNutritionInfo!: FormGroup;

  genders: Array<string> = ["Masculino", "Femenino", "Otro"];
  identificationTypes: Array<string> = ["CC", "Pasaporte"];
  countries : Array<string> = ["Colombia", "Brasil", "Argentina"];
  cities : Array<string> = ["Bogota", "Brasilia", "Buenos Aires"];
  sports : Array<string> = ["ciclismo", "atletismo"];
  preferences : Array<string> = ["vegetariano", "vegano", "ninguno"];
  alergies : Array<string> = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGeneralInfo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      identificationType: ['', [Validators.required]],
      identificationNumber: ['', [Validators.required, Validators.minLength(8)]],
      gender: ['', [Validators.required]],
    });

    this.formDemograficInfo = this.formBuilder.group({
      OriginCountry: ['', [Validators.required]],
      OriginCity: ['', [Validators.required]],
      CurrentCountry: ['', [Validators.required]],
      CurrentCity: ['', [Validators.required]],
      yearInCurrentCity: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.formSportInfo = this.formBuilder.group({
      age: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      sports: this.formBuilder.array([], [Validators.required]),
    });

    this.formNutritionInfo = this.formBuilder.group({
      alergies: ['', []],
      preferences: ['', [Validators.required]]
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.formSportInfo.get('sports') as FormArray;
    
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  addAlergy(alergie : string) {
    if (alergie !== "" && !this.alergies.includes(alergie)){
      this.alergies.push(alergie);
      this.formNutritionInfo.reset()
    }
  }
  submit(){
    console.log(this.formGeneralInfo.value);
    console.log(this.formDemograficInfo.value);
    console.log(this.formSportInfo.value);
    console.log(this.formNutritionInfo.value);
    this.router.navigate(['../../protected/dashboard'])
  }

}
