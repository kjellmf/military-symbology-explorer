export * from './jmsml';

export function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return array[i];
        }
    }
}
