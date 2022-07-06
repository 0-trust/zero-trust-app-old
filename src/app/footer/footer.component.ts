import { Component, OnInit } from '@angular/core';
import { ZeroTrustService } from '../services/zero-trust.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  version = '0.0.0'
  constructor(private zt: ZeroTrustService) { }

  ngOnInit(): void {
    this.zt.getVersion().subscribe(v => this.version = v)
  }

}
