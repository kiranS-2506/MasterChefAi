import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatapiService {
  private key:any ='AIzaSyBRB29lak39ByQMGmgRNtF7PsNML9TQnWk'

  constructor(public chatAI: HttpClient) { }
  askAI(que: string) {
    
    let promt:any=`You are an expert chef with comprehensive knowledge of a wide range of international dishes and culinary techniques. Your ability to create, adapt, and share recipes is exceptional, and you take pride in providing detailed ingredients and preparation methods. 
Your task is to provide a complete recipe when I request a specific dish or food or some food relatives, with simple steps where each step or line has less than 20 words. Here are the details I may supply for you to create the recipe:  

Dish Name: __________  
Cuisine Type: __________  
Dietary Restrictions (if any): __________


Provide the recipe in a structured format, including:  

Ingredients List:  
Preparation Steps:


When creating the recipe, consider the complexity level (easy, medium, or hard) and ensure that the instructions are clear and concise for someone with basic cooking skills. Avoid using overly complex culinary jargon that might confuse beginner cooks. Provide enough context so that the reader can easily follow the recipe and replicate the dish successfully.
` + que
    return this.chatAI.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.key}`,
      {
        "contents": [{
          "parts": [{
            "text": promt}]
        }]
      }
    );
  }
}
