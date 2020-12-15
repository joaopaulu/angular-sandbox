import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private fb: FormBuilder,
    private rest: LiveService
  ) { }

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      liveName:['',[Validators.required]],
      channelName:['',[Validators.required]],
      liveLink:['',[Validators.required]],
      liveDate:['2021-05-23T00:00:00',[Validators.required]],
      //liveTime:['',[Validators.required]],
    })
  }

  createLive(): void {
    this.rest.postLives(this.liveForm.value).subscribe(result => {});
    console.log(this.liveForm.value);
    this.dialogRef.close(true);
    this.liveForm.reset();
    window.location.reload();
  }

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }




}
