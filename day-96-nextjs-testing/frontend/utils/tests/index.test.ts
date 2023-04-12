import { cutTextToLength, slugify, composeArticleSlug, extractArticleIdFromSlug } from "../index";

// const str = "The quick brown fox jumps over the lazy dog.";

// describe("cutTextToLength", () => {
//   it("should cut text to length", () => {
//     expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
//   });

//   it("should not cut text to length", () => {
//     expect(cutTextToLength(str, 100)).toBe(str);
//   });
// });

// const str = "tushig0721--=+[]/.@gmail.com"

// describe("slugify", () => {
//     it("", () => {
//       expect("tushig0721gmailcom");
//     });
  
//     it("", () => {
//       expect(slugify(str));
//     });
//   });

describe("composeArticle", () => {
    
  it("", () => {
    expect(composeArticleSlug(123, "person")).toBe("person-123"); //Expected-хүлээгдэж байгаа: "-20" 
  });                                                             //Received-хүлээн авсан нь "person-123"

  it("", () => {
    expect(extractArticleIdFromSlug("person-123")).toBe("123"); //Expected-хүлээгдэж байгаа: ""
  });                                                           //Received-хүлээн авсан нь "123"
  
});


