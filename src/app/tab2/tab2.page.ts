import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-tab2,slides-examle',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  @ViewChild('tab2') tab2;

  slideOpts = {
    // effect: 'coverflow',  //轮播效果
    autoplay: {
      delay: 5000,
    },
    loop: true
  };
  constructor() { }
  ngOnInit() {
  }

  //手动滑动后轮播图不自动轮播的解决方法
  slideDidChange() {
    this.tab2.startAutoplay();
  }
}
