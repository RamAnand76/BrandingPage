"use client";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-spring-3d-carousel";
import Image from "next/image";

interface Card {
  key: string;
  content: JSX.Element;
  image: {
    src: string;
    alt: string;
  };
}

interface CarouselComponentProps {
  cards: Card[];
  height: string;
  width: string;
  margin: string;
  offset: number;
  showArrows: boolean;
}

export default function CarouselComponent(props: CarouselComponentProps) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(0);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const slides = cards.map((card, index) => ({
    key: card.key || uuidv4(),
    content: card.content,
    onClick: () => setGoToSlide(index),
  }));

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
      }}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}