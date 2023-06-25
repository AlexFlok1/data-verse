import { SingleLinkList } from './src/SingleLinkedList';

const list = new SingleLinkList();

list.push('test');
list.push('push');
list.push('1');
list.push('test2');
list.set('set value', 2);
console.log(list.get(2));
