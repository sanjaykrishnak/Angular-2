export class Animal {
    id: string;
    name: string;
    type: string;
     constructor(id = '0', name = 'Duck', type = 'Good') {
         this.id = id;
         this.name = name;
         this.type = type;
        }
}
