import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lorem-generator',
  templateUrl: './lorem-generator.component.html',
  styleUrls: ['./lorem-generator.component.sass']
})
export class LoremGeneratorComponent implements OnInit {

  nb = '5';
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dui nisl, at egestas elit auctor sed. Aliquam erat volutpat. Integer id dolor nibh. Ut diam nisl, eleifend vel lorem interdum, fringilla hendrerit tortor. Donec et mi sed tortor fringilla accumsan. Aenean dapibus magna ac rhoncus condimentum. Praesent luctus quis tortor eu fermentum. Curabitur orci neque, tristique ut leo at, aliquet porta risus. In hac habitasse platea dictumst. Quisque sodales pellentesque ornare. Phasellus vestibulum porta finibus. Proin eget faucibus sapien, sit amet accumsan metus. In gravida sollicitudin condimentum. Ut eget lacus vel lacus hendrerit aliquam. Cras eget pharetra justo. Cras dignissim mollis rutrum. Pellentesque eget ipsum enim. Phasellus quis gravida elit, condimentum rutrum diam. Curabitur luctus interdum mi. Duis tincidunt mi ex, sit amet lobortis est faucibus aliquam. Suspendisse potenti. Vestibulum in odio magna. Integer iaculis eget ex vel sodales. Cras neque metus, convallis et finibus et, sodales et nulla. Suspendisse semper velit ut massa dapibus molestie. Cras varius, massa at cursus gravida, diam orci facilisis ligula, non accumsan ligula libero dapibus velit. Vivamus imperdiet interdum arcu interdum efficitur. Ut tempor enim id est consectetur egestas. Pellentesque id tempor ipsum, vel dictum velit. Nunc quis elit eget ligula pharetra convallis blandit dignissim est. Nulla in ipsum vitae ex mollis mattis. Pellentesque in consequat felis, non ornare justo. Praesent sodales a nibh quis malesuada. Aliquam ac congue dolor, a finibus mi. Nullam vel malesuada orci. Praesent condimentum mi vel elementum laoreet. Vestibulum elementum luctus urna at sollicitudin. Phasellus non auctor ipsum, gravida molestie nulla. Sed tempor mi ut purus vulputate semper. In hac habitasse platea dictumst. Duis vestibulum in massa vitae aliquet. Donec commodo pellentesque mi, sed ornare velit condimentum in. Aenean placerat, lectus vitae finibus dictum, libero justo auctor magna, eget malesuada mi odio in lectus. Mauris lacinia, felis eget egestas ultrices, lacus tortor ornare nisi, sit amet luctus arcu tellus sed dui. Sed faucibus lorem eget eros mattis pretium. Curabitur augue massa, fringilla id dictum non, cursus non augue. Morbi posuere dolor neque, et tincidunt purus dapibus a. Integer ut quam non libero finibus molestie nec ut ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris finibus ultrices tellus, eget porta ante egestas id. Sed volutpat maximus ex vehicula auctor. Duis bibendum massa ac dolor sodales, ut suscipit augue tempor. Nam ut sapien nec tortor gravida ullamcorper. Cras et tempus velit, non ullamcorper nunc. Sed ultrices turpis et quam fringilla venenatis. Etiam vitae consectetur est. Curabitur sed diam at odio consequat molestie. Morbi lacinia lacinia euismod. Vestibulum blandit erat lectus, at lobortis nisi vestibulum id. Nam id purus et risus vehicula lobortis in vel mauris. Praesent posuere imperdiet nunc, vitae feugiat velit imperdiet eu. Nam eu euismod erat. Aenean blandit ipsum massa, a tristique metus aliquam ac. Integer at nisl vulputate, auctor risus vitae, eleifend ante. Aenean elit augue, bibendum eu vehicula vitae, facilisis venenatis tellus. Mauris elementum quam sit amet tristique auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque placerat turpis a mauris dapibus, eget bibendum felis tincidunt. Donec porta lectus ac interdum accumsan. Curabitur nunc augue, pharetra nec sollicitudin nec, pulvinar venenatis mauris. Fusce odio quam, scelerisque ornare lacinia id, congue a tellus. Vestibulum ut malesuada quam. In ex turpis, commodo porta tincidunt in, consequat in turpis. Curabitur ut sem vel erat scelerisque tempus. In dictum et diam non condimentum. Nulla facilisi. Aenean egestas mi et luctus ullamcorper. Sed lacinia risus eget nisl bibendum tincidunt. Maecenas consectetur nunc leo, maximus fermentum lorem mattis quis. Pellentesque pretium quam eu nisl euismod pulvinar. Duis fringilla orci at rhoncus interdum. Maecenas porta finibus augue, in aliquet neque. Mauris ac consequat mi, nec elementum dolor. Sed vulputate porta lectus, ut lacinia purus imperdiet sit amet. Integer facilisis efficitur tellus sed tempus. Etiam euismod quam nibh, volutpat pretium nibh porta id. In hac habitasse platea dictumst. Morbi consectetur felis non mollis blandit. Fusce egestas nibh sed augue lobortis tincidunt. Phasellus ultrices fermentum magna non sodales. Morbi at magna mattis, dapibus sapien sit amet, ultrices purus. Morbi varius purus eget tortor tempor, quis eleifend lacus iaculis. Fusce rhoncus gravida nisi, quis feugiat mi ultricies malesuada. Nulla tincidunt varius mollis. Pellentesque pretium tempus ipsum non dictum. Praesent sit amet tincidunt eros, non iaculis leo. Fusce mauris mauris, tempus tincidunt vulputate at, tempor a mi. Aliquam tellus nisi, iaculis vitae sollicitudin sed, convallis at metus. Pellentesque volutpat efficitur nisl ut gravida. Pellentesque vitae velit tristique, iaculis sapien quis, mattis erat. Donec auctor ullamcorper est, nec fringilla libero malesuada ut. Etiam congue, massa at dapibus suscipit, tortor risus faucibus quam, vel semper justo lacus vel ante. Integer scelerisque maximus interdum. Vivamus placerat nulla dolor, ac consectetur ligula vehicula luctus. Donec tincidunt purus nisi, at ultrices enim rutrum at. Pellentesque ex ante, gravida id vehicula in, lobortis ac tortor. Curabitur vel euismod sem, non feugiat nulla. Curabitur malesuada magna eu imperdiet dictum. Etiam ac placerat lacus, sed cursus massa. Ut ac leo felis. Nunc accumsan mi quis purus sollicitudin egestas. Vestibulum quis porttitor magna. Donec eget enim sem. Sed aliquam ipsum nec justo condimentum, non vulputate arcu maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis facilisis tincidunt urna, vel elementum neque tempus vitae. Aenean cursus dictum sapien, in mattis velit accumsan vel. Donec pharetra lectus at velit pharetra aliquet. Donec ac euismod velit. Nulla eu tellus eros. Ut auctor odio a massa scelerisque, vel ornare nibh molestie. Maecenas sit amet fermentum urna, sit amet tempor tortor. Ut vel blandit urna. In finibus mi in est vulputate suscipit. Sed venenatis ornare pellentesque.';
  type = 'sentence';

  constructor() { }

  output(): string{
    switch (this.type){
      case 'word': return this.generateWords(Number(this.nb));
      case 'sentence': return this.generateSentences(Number(this.nb));
      default: return '';
    }
  }


  generateWords(quantity: number): string{
    const words = this.lorem.split(' ');
    let word = '';
    for (let i = 0; i < quantity; i++){
      const pos = i % words.length;
      word += ' ' + words[pos];
    }
    return word.trim();
  }

  generateSentences(quantity: number): string{
    let sentence = '';
    const sentences = this.lorem.split('.');
    for (let i = 0; i < quantity; i++) {
      const pos = i % sentences.length;
      sentence += sentences[pos] + '.';
    }
    return sentence.trim();
  }

  ngOnInit(): void {
  }

}
