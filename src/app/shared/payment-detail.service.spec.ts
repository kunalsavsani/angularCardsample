//import {PaymentDetailComponent } from './payment-detail.component';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { Observable } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClientJsonpModule } from '@angular/common/http';



import { TestBed, async, inject } from '@angular/core/testing';



describe('PostService', () => {
  let postService: PaymentDetailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        PaymentDetailService
      ],
    });

    postService = TestBed.get(PaymentDetailService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, PaymentDetailService],
    (httpClient: HttpTestingController, postService: PaymentDetailService) => {

      
             const card : PaymentDetail ={
        Id:1,
      CardNumber : '1111222233334444',
      CardOwnerName : 'kunal',
      CVV :'777',
      ExpiryDate : '12-21'

             };


    /*  postService.refreshList()
        .subscribe((card: any) => {
          expect(card.length).toBe(1);
          */
         postService.refreshList()
         .subscribe(PaymentDetail => {
           expect(card.Id).toEqual(1);
 
        });

 
      let req = httpMock.expectOne('http://localhost:50080/api/paymentDetails/');
      expect(req.request.method).toBe("GET");

      req.flush(card);
      httpMock.verify();

    })));

    it('should create record',()=>
    {
     const card : PaymentDetail ={
       Id:1,
     CardNumber : '1111222233334444',
     CardOwnerName : 'kunal',
     CVV :'777',
     ExpiryDate : '12-21'
 };
  postService.postPaymentDetail(card)
 .subscribe(data=>
     {
         expect(data).toEqual(card,'should return card');
     });
   const req=httpMock.expectOne('http://localhost:50080/api/paymentDetails/');
    expect(req.request.method).toEqual('POST');
   req.flush(card);
   httpMock.verify();
 
 

});

});






















/*
describe('PaymentDetailService', ()=>
{

    let service : PaymentDetailService;
    let HttpTestingController: HttpTestingController;
     beforeEach (()=>
     {
   TestBed.configureTestingModule({
imports: [HttpTestingController],
providers:[PaymentDetailService]
   }
   );
    service=TestBed.inject(PaymentDetailService);
  HttpTestingController =TestBed.get(HttpTestingController);
    });
 it('should create record',()=>
     {
      const card : PaymentDetail ={
        Id:1,
      CardNumber : '1111222233334444',
      CardOwnerName : 'kunal',
      CVV :'777',
      ExpiryDate : '12-21'
  };
   service.postPaymentDetail(card)
  .subscribe(data=>
      {
          expect(data).toEqual(card,'should return card');
      });
    const req=HttpTestingController.expectOne('http://localhost:50080/api/paymentDetails/');
     expect(req.request.method).toEqual('post');
    req.flush(card);
  
  
  
      });
      

    it('returned Observable should match the right data', () => {
        const mockCourses = [
        {
            Id:1,
            CardNumber : '1111222233334444',
            CardOwnerName : 'kunal',
            CVV :'777',
            ExpiryDate : '12-21'
        }
        ];
  
        service.refreshList()
          .subscribe(coursesData => {
            expect(coursesData[0].Id).toEqual(1);
            expect(coursesData[0].CardNumber).toEqual(
              '1111222233334444'
            );
      
          });
  
        const req = HttpTestingController.expectOne(
            'http://localhost:50080/api/paymentDetails/'
        );

        req.flush(mockCourses);
        });
        
});

*/