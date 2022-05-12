import firestore from '@react-native-firebase/firestore';

export function getTagByName(name, limit = 5) {
  return firestore()
    .collection('tags')
    .orderBy('name')
    .startAt(name.toLowerCase())
    .endAt(name.toLowerCase() + '~')
    .limit(limit)
    .get()
    .then((res) => {
      if (res.docs.length === 0) {
        throw new Error('Tags were not found');
      }
      return res.docs.map((e) => e.data());
    });
}
