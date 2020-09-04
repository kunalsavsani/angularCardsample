import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles:[]
})
export class PaymentDetailComponent {

  constructor(public service:PaymentDetailService) { }

  ngOnInit()
  {
    this.resetform();
  }
  resetform(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();

    this.service.formData={
      Id:0,
      CardNumber:'',
      CardOwnerName:'',
      ExpiryDate:'',
      CVV:''
    }
  }
onSubmit(form:NgForm)
{
  
  if(this.service.formData.Id==0)
   this.insertRecord(form);
   else
   this.updateRecord(form);

/*
this.service.postPaymentDetail(form).subscribe(
  res=>{
    this.resetform(form);
    this.service.refreshList();
  },
  err=>{
    console.log(err);
  })
  */
}
insertRecord(form:NgForm)
{

  alert("Data Submitted successfully");
  this.service.postPaymentDetail(form).subscribe(
    res=>{
      this.resetform(form);
      this.service.refreshList();
    },
    err=>{
      console.log(err);
    })
}


 updateRecord(form:NgForm)
{
  //alert("Data updated");
  this.service.putPaymentDetail(form).subscribe(
    res=>{
      this.resetform(form);
      this.service.refreshList();
      alert("Data updated");
    },
    err=>{
      console.log(err);

})

}
}