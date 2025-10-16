class Article {
  #likeCount;

  constructor({ title, content, writer, likeCount = 0 }) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.#likeCount = likeCount;
  }

  // 좋아요 1 증가
  like() {
    this.#likeCount++;
  }

  // 외부에서 좋아요 수를 읽을 수 있도록 getter 제공
  get likeCount() {
    return this.#likeCount;
  }

  toString() {
    return `제목: ${this.title}, 작성자: ${this.writer}, 좋아요: ${this.likeCount}`;
  }
}

const article = new Article({
  title: '전자제품 리뷰',
  content: '신제품 스마트폰에 대한 리뷰입니다.',
  writer: '홍길동',
});

article.like();
article.like();
console.log(article.toString()); // 제목: 전자제품 리뷰, 작성자: 홍길동, 좋아요: 2
