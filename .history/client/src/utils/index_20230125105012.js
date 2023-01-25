import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constance'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * 
    surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    ///check if the random prompt is the same as the current prompt
    if (randomPrompt === prompt) {
        return getRandomPrompt(prompt)
    }
    

    return randomPrompt

}
export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  }