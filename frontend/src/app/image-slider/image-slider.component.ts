import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule]
})
export class ImageSliderComponent implements OnInit {
  currentSlide = 0;
  slides = [
    {
      image: 'assets/public/images/slider/slide1.jpg',
      title: 'Welcome to AgeSec Shop',
      description: 'Your one-stop shop for all your needs'
    },
    {
      image: 'assets/public/images/slider/slide2.jpg',
      title: 'Quality',
      description: 'Best quality in the market'
    },
    {
      image: 'assets/public/images/slider/slide3.jpg',
      title: 'Special Offers',
      description: 'Check out our latest deals'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
} 