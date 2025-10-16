class Product {
  #favoriteCount; // 캡슐화: private field

  constructor({
    name,
    description,
    price,
    tags = [],
    images = [],
    favoriteCount = 0,
  }) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.images = images;
    this.#favoriteCount = favoriteCount;
  }

  // 찜하기 수를 1 증가
  favorite() {
    this.#favoriteCount++;
  }

  // 찜하기 수를 외부에서 읽을 수 있도록 getter 제공
  get favoriteCount() {
    return this.#favoriteCount;
  }

  // 객체 정보를 문자열로 표현 (다형성 기반 활용 가능)
  toString() {
    return `상품명: ${this.name}, 가격: ${this.price}, 찜: ${this.favoriteCount}`;
  }
}

class ElectronicProduct extends Product {
  constructor({
    name,
    description,
    price,
    tags = [],
    images = [],
    favoriteCount = 0,
    manufacturer,
  }) {
    // 부모 클래스 생성자 호출
    super({ name, description, price, tags, images, favoriteCount });
    this.manufacturer = manufacturer;
  }

  // ElectronicProduct 전용 출력
  toString() {
    return `${super.toString()}, 제조사: ${this.manufacturer}`;
  }
}

const ep = new ElectronicProduct({
  name: '스마트폰',
  description: '최신형 스마트폰입니다.',
  price: 999000,
  tags: ['전자제품', '휴대폰'],
  images: ['https://example.com/phone.jpg'],
  manufacturer: '삼성전자',
});

ep.favorite();
console.log(ep.toString()); // 상품명: 스마트폰, 가격: 999000, 찜: 1, 제조사: 삼성전자
