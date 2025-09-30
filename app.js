// 1. **FIXED: Menu Data is moved to the top**
const menu = {
 veg: {
    "Veg Special Starters / व्हेज स्पेशल स्टार्टर्स": [
    { "name": "Paneer Chilli / पनीर चिली", "price": "₹200" },
    { "name": "Paneer Chilli Gravy / पनीर चिली ग्रेव्ही", "price": "₹220" },
    { "name": "Paneer Crispy / पनीर क्रिस्पी", "price": "₹220" },
    { "name": "Paneer 65 / पनीर ६५", "price": "₹220" },
    { "name": "Mushroom Chilli / मशरूम चिली", "price": "₹180" },
    { "name": "Mushroom Salt Pepper / मशरूम सॉल्ट पेपर", "price": "₹180" },
    { "name": "Mushroom Manchurian / मशरूम मंचुरियन", "price": "₹180" },
    { "name": "Mushroom 65 / मशरूम ६५", "price": "₹220" },
    { "name": "Baby Corn Chilli / बेबी कॉर्न चिली", "price": "₹210" },
    { "name": "Spring Roll / स्प्रिंग रोल", "price": "₹240" }
  ],
    
  "Veg Biryani / Pulav / व्हेज बिर्याणी / पुलाव": [
    { "name": "Veg Biryani / व्हेज बिर्याणी", "price": "₹200" },
    { "name": "Veg Dum Biryani / व्हेज दम बिर्याणी", "price": "₹220" },
    { "name": "Mix Veg Biryani / मिक्स व्हेज बिर्याणी", "price": "₹180" },
    { "name": "Paneer Biryani / पनीर बिर्याणी", "price": "₹220" },
    { "name": "Paneer Dum Biryani / पनीर दम बिर्याणी", "price": "₹240" },
    { "name": "Mushroom Biryani / मशरूम बिर्याणी", "price": "₹240" },
    { "name": "Veg Pulav / व्हेज पुलाव", "price": "₹180" },
    { "name": "Jira Pulav / जिरा पुलाव", "price": "₹160" },
    { "name": "Tawa Pulav / तवा पुलाव", "price": "₹170" },
    { "name": "Aloo Pulav / आलू पुलाव", "price": "₹160" },
    { "name": "Chana Pulav / चणा पुलाव", "price": "₹170" },
    { "name": "Mutter Pulav / मटर पुलाव", "price": "₹180" },
    { "name": "Paneer Pulav / पनीर पुलाव", "price": "₹200" },
    { "name": "Mataka Pulav / मटका पुलाव", "price": "₹190" },
    { "name": "Kaju Pulav / काजू पुलाव", "price": "₹190" },
    { "name": "Kaju Paneer Pulav / काजू पनीर पुलाव", "price": "₹220" },
    { "name": "Kaju Paneer Mushroom Pulav / काजू पनीर मशरूम पुलाव", "price": "₹240" },
    { "name": "Kaju Mutter Pulav / काजू मटर पुलाव", "price": "₹220" },
    { "name": "Kaju Butter Pulav / काजू बटर पुलाव", "price": "₹240" },
    { "name": "Green Peas Pulav / ग्रीन पीस पुलाव", "price": "₹170" },
    { "name": "Mushroom Pulav / मशरूम पुलाव", "price": "₹210" },
    { "name": "Lemon Rice / लेमन राईस", "price": "₹150" },
    { "name": "Masala Rice / मसाला राईस", "price": "₹160" }
    ],
    "Maharashtrian Nasta / महाराष्ट्रीयन नाष्टा": [
        { "name": "Vada Pav (2Pcs)/वडा पाव (२ पीस)", "price": "₹40" },
  { "name": "Kanda Bhaje/कांदा भजी", "price": "₹60" },
  { "name": "Batate Bhaje/बटाटे भजी", "price": "₹60" },
  { "name": "Palak Bhaje/पालक भजी", "price": "₹60" },
  { "name": "Mug Bhaje/मूग भजी", "price": "₹60" },
  { "name": "Kanda Pohe/कांदा पोहे", "price": "₹50" },
  { "name": "Rassa Vada/रस्सा वडा", "price": "₹80" },
  { "name": "Puri Bhaji/पुरी भाजी", "price": "₹80" },
  { "name": "Misal Pav/मिसळ पाव", "price": "₹120" },
  { "name": "Special Kolhapuri Misal/स्पेशल कोल्हापुरी मिसळ", "price": "₹80" },
  { "name": "Upama/उपमा", "price": "₹80" },
  { "name": "Pav Bhaji/पावभाजी", "price": "₹100" },
  { "name": "Butter Pav Bhaji/बटर पावभाजी", "price": "₹120" },
  { "name": "Butter Cheese Pav Bhaji/बटर चीज पावभाजी", "price": "₹140" },
  { "name": "Paneer Pav Bhaji/पनीर पावभाजी", "price": "₹160" },
  { "name": "Prithviraj Special Pav Bhaji/पृथ्वीराज स्पेशल पावभाजी", "price": "₹160" },
  { "name": "Masala Pav (2Pcs)/मसाला पाव (२ पीस)", "price": "₹50" },
  { "name": "Shev Puri/शेवपुरी", "price": "₹60" }
      
    ],
    "Raita/Salad/Papad / राईता / सलाड / पापड": [
    { "name": "Fry Papad / फ्राय पापड", "price": "₹30" },
    { "name": "Roasted Papad / रोस्टेड पापड", "price": "₹30" },
    { "name": "Masala Papad / मसाला पापड", "price": "₹40" },
    { "name": "Nagli Fry (Roast) / नागली फ्राय (रोस्ट)", "price": "₹35" },
    { "name": "Nagli Masala Papad / नागली मसाला पापड", "price": "₹50" },
    { "name": "Sindhi Papad / सिंधी पापड", "price": "₹70" },
    { "name": "Rumali Khakara / रुमाली खाकरा", "price": "₹200" },
    { "name": "Veg Raita / व्हेज रायता", "price": "₹80" },
    { "name": "Bundi Raita / बुंदी रायता", "price": "₹80" },
    { "name": "Pineapple Raita / पायनॅपल रायता", "price": "₹120" },
    { "name": "Dahi Plate / दही प्लेट", "price": "₹70" }
  ],
     "Veg Chinese Continued / व्हेज चायनीज": [
    { "name": "Veg Tripple Schezwan Rice / व्हेज ट्रिपल शेजवान राईस", "price": "₹230" },
    { "name": "Veg Tripple Noodles / व्हेज ट्रिपल नूडल्स", "price": "₹220" },
    { "name": "Veg Tripple Schezwan Noodles / व्हेज ट्रिपल शेजवान नूडल्स", "price": "₹230" },
    { "name": "Veg Combination Rice / व्हेज कॉम्बिनेशन राईस", "price": "₹220" },
    { "name": "Veg Burnt Garlic Rice / व्हेज बंट गार्lik राईस", "price": "₹230" },
    { "name": "Veg Burnt Garlic Noodles / व्हेज ब्रेट गार्लिक नूडल्स", "price": "₹240" },
    { "name": "Veg Hong Kong/Singapore Rice / व्हेज हाँगकाँग / सिंगापूर राईस", "price": "₹230" },
    { "name": "Veg Hong Kong/Singapore Noodles / व्हेज हाँगकाँग / सिंगापूर नूडल्स", "price": "₹230" },
    { "name": "Veg Sizzler / व्हेज सिझलर", "price": "₹300" },
    { "name": "Paneer Fried Rice / पनीर फ्राईड राईस", "price": "₹200" }
  ],
    "Beverages/ शीतपेय": [
  { "name": "Tea/चहा", "price": "₹20" },
  { "name": "Special Tea/स्पेशल चहा", "price": "₹30" },
  { "name": "Black Lemon Tea/ब्लॅक लेमन टी", "price": "₹20" },
  { "name": "Coffee/कॉफी", "price": "₹25" },
  { "name": "Cold Coffee/कोल्ड कॉफी", "price": "₹50" },
  { "name": "Green Tea/ग्रीन टी", "price": "₹40" },
  { "name": "Milk Glass/दूध ग्लास", "price": "₹40" },
  { "name": "Lassi/लस्सी", "price": "₹45" },
  { "name": "Chaas/Masala Chaas/छास/मसाला छास", "price": "₹45" },
  { "name": "Limbu Pani/लिंबू पाणी", "price": "₹40" },
  { "name": "Mineral Water/मिनरल वॉटर", "price": "₹20/₹25" }
],
"South Indian Special / साऊथ इंडियन स्पेशल":[
    
  { "name": "Idli/इडली", "price": "₹70" },
  { "name": "Medu Vada/मेदूवडा", "price": "₹70" },
  { "name": "Mix Vada/मिक्स वडा", "price": "₹70" },
  { "name": "Sada Dosa/सादा डोसा", "price": "₹80" },
  { "name": "Masala Dosa/मसाला डोसा", "price": "₹90" },
  { "name": "Cheese Sada Dosa/चीज सादा डोसा", "price": "₹90" },
  { "name": "Cheese Masala Dosa/चीज मसाला डोसा", "price": "₹120" },
  { "name": "Butter Sada Dosa/बटर सादा डोसा", "price": "₹100" },
  { "name": "Butter Masala Dosa/बटर मसाला डोसा", "price": "₹120" },
  { "name": "Cut Dosa/कट डोसा", "price": "₹100" },
  { "name": "Mysore Sada Dosa/मैसूर सादा डोसा", "price": "₹110" },
  { "name": "Mysore Masala Dosa/मैसूर मसाला डोसा", "price": "₹120" },
  { "name": "Paper Dosa/पेपर डोसा", "price": "₹120" },
  { "name": "Paper Masala Dosa/पेपर मसाला डोसा", "price": "₹120" },
  { "name": "Special Masala Dosa/स्पेशल मसाला डोसा", "price": "₹160" },
  { "name": "Pizza Dosa/पिझ्झा डोसा", "price": "₹200" },
  { "name": "Batata Vada Sambhar/बटाटा वडा सांबर", "price": "₹60" },

  { "name": "Sada Uttapa/सादा उत्तप्पा", "price": "₹80" },
  { "name": "Onion Uttapa/ओनियन उत्तप्पा", "price": "₹80" },
  { "name": "Tomato Uttapa/टोमॅटो उत्तप्पा", "price": "₹80" },
  { "name": "Tomato Onion Uttapa/टोमॅटो ओनियन उत्तप्पा", "price": "₹90" },
  { "name": "Masala Uttapa/मसाला उत्तप्पा", "price": "₹100" },
  { "name": "Cheese Sada Uttapa/चीज सादा उत्तप्पा", "price": "₹90" },
  { "name": "Butter Cheese Sada Uttapa/बटर चीज सादा उत्तप्पा", "price": "₹110" },
  { "name": "Butter Cheese Masala Uttapa/बटर चीज मसाला उत्तप्पा", "price": "₹120" },
  { "name": "Paneer Uttapa/पनीर उत्तप्पा", "price": "₹140" },
  { "name": "Special Masala Uttapa/स्पेशल मसाला उत्तप्पा", "price": "₹160" },
  { "name": "Spring Roll Dosa/स्प्रिंग रोल डोसा", "price": "₹180" }



],
"Sandwiches, Parathas & Sweets / सॅन्डविच, पराठे आणि गोड पदार्थ":[
    
  // 🥪 Sandwich / सॅन्डविच
  { "name": "Bread Butter Sandwich/ब्रेड बटर सॅन्डविच", "price": "₹60" },
  { "name": "Veg Sandwich Sada/व्हेज सॅन्डविच सादा", "price": "₹100" },
  { "name": "Veg Cheese Sandwich/व्हेज चीज सॅन्डविच", "price": "₹150" },
  { "name": "Veg Grilled Sandwich/व्हेज ग्रिल्ड सॅन्डविच", "price": "₹140" },
  { "name": "Veg Cheese Grilled Sandwich/व्हेज चीज ग्रिल्ड सॅन्डविच", "price": "₹160" },
  { "name": "Cheese Sandwich/चीज सॅन्डविच", "price": "₹150" },

  // 🍕 Pizza / पिझ्झा
  { "name": "Regular Pizza/रेग्युलर पिझ्झा", "price": "₹160" },
  { "name": "Paneer Pizza/पनीर पिझ्झा", "price": "₹180" },
  { "name": "Mushroom Pizza/मशरूम पिझ्झा", "price": "₹200" },

  // 🫓 Paratha / पराठा
  { "name": "Butter Aloo Paratha/आलू बटर पराठा", "price": "₹140" },
  { "name": "Paneer Paratha/पनीर पराठा", "price": "₹140" },
  { "name": "Mix Veg Paratha/मिक्स व्हेज पराठा", "price": "₹140" },
  { "name": "Butter Cheese Paneer Paratha/बटर चीज पनीर पराठा", "price": "₹180" },

  // 🍮 Sweet / स्वीट
  { "name": "Gulab Jamun/गुलाब जामुन", "price": "₹40" },
  { "name": "Khir/खीर", "price": "₹70" },
  { "name": "Fruit Crusted/फळे क्रस्टेड", "price": "₹80" },
  { "name": "Ice Cream/आईस्क्रीम", "price": "₹30" },
  { "name": "Shira/शिरा", "price": "₹80" },
  { "name": "Shrikhand/श्रीखंड", "price": "—" }
],
"Veg Main Course / व्हेज मेन कोर्स": [
    { "name": "Shev Bhaji / शेवभाजी", "price": "₹120" },
    { "name": "Shev Bhaji Tadka / शेवभाजी तडका", "price": "₹140" },
    { "name": "Dudh Shev Bhaji / दूध शेवभाजी", "price": "₹140" },
    { "name": "Dudh Shev Bhaji Tadka / दूध शेवभाजी तडका", "price": "₹160" },
    { "name": "Soyaben Masala / सोयाबीन मसाला", "price": "₹160" },
    { "name": "Aloo Mutter Dry / आलू मटर ड्राय", "price": "₹180" },
    { "name": "Aloo Mutter / आलू मटर", "price": "₹180" },
    { "name": "Aloo Chana Masala / आलू चणा मसाला", "price": "₹190" },
    { "name": "Aloo Jeera / आलू जीरा", "price": "₹160" },
    { "name": "Aloo Masala / आलू मसाला", "price": "₹140" },
    { "name": "Aloo Gobi Mutter / आलू गोबी मटर", "price": "₹200" },
    { "name": "Aloo Methi / आलू मेथी", "price": "₹180" },
    { "name": "Aloo Dum Punjabi Masala / आलू दम पंजाबी मसाला", "price": "₹190" },
    { "name": "Green Peas Masala / ग्रीन पीस मसाला", "price": "₹140" },
    { "name": "Lasun Palak / लसूण पालक", "price": "₹170" },
    { "name": "Lasun Fry / लसूण फ्राय", "price": "₹130" },
    { "name": "Bhendi Fry / भेंडी फ्राय", "price": "₹160" },
    { "name": "Bhendi Masala / भेंडी मसाला", "price": "₹170" },
    { "name": "Baingan Masala / बैंगन मसाला", "price": "₹170" },
    { "name": "Baingan Bharata / बैंगन भरता", "price": "₹160" },
    { "name": "Bharwa Baingan / भरवा बैंगन", "price": "₹160" },
    { "name": "Mataki Fry / मटकी फ्राय", "price": "₹170" },
    { "name": "Mataki Masala / मटकी मसाला", "price": "₹170" },
    { "name": "Tomato Chutney / टोमॅटो चटणी", "price": "₹120" },
    { "name": "Shengadana Chutney / शेंगदाणा चटणी", "price": "₹130" },
    { "name": "Thecha / ठेचा", "price": "₹110" },
    { "name": "Kadhi Pakoda / कढी पकोडा", "price": "₹150" },
    { "name": "Ziraka / झिरका", "price": "₹140" },
    { "name": "Pithal / पिठलं", "price": "₹140" },
    { "name": "Pithal Kadai / पिठलं कडाई", "price": "₹160" },
    { "name": "Malai Kofta / मलाई कोफ्ता", "price": "₹210" },
    { "name": "Bhajachi Aamati (Black Gravy) / भजाची आमटी/काळा रस्सा", "price": "₹170" },
    { "name": "Methi Masala / मेथी मसाला", "price": "₹160" },
    { "name": "Mix Veg / मिक्स व्हेज", "price": "₹160" },
    { "name": "Veg Kolhapuri / व्हेज कोल्हापुरी", "price": "₹170" },
    { "name": "Veg Tawa / व्हेज तवा", "price": "₹180" },
    { "name": "Veg Patiala / व्हेज पटियाला", "price": "₹220" },
    { "name": "Veg Bhuna / व्हेज भूना", "price": "₹220" },
    { "name": "Veg Kadai / व्हेज कढई", "price": "₹220" },
    { "name": "Veg Peshawari / व्हेज पेशावरी", "price": "₹200" },
    { "name": "Veg Maratha / व्हेज मराठा", "price": "₹190" },
    { "name": "Veg Jaypuri / व्हेज जयपुरी", "price": "₹230" },
    { "name": "Veg Anda Curry / व्हेज अंडा करी", "price": "₹200" },
    { "name": "Veg Hydrabadi Special Masala / व्हेज हैद्राबादी स्पेशल मसाला", "price": "₹240" },
    { "name": "Veg Toofani / व्हेज तुफानी", "price": "₹220" },
    { "name": "Veg Coconut Masala / व्हेज नारळ मसाला", "price": "₹220" },
    { "name": "Veg Kheema / व्हेज खिमा", "price": "₹260" },
    { "name": "Veg Koliwada / व्हेज कोलीवाडा", "price": "₹200" },
    { "name": "Veg Maharaja / व्हेज महाराजा", "price": "₹220" },
    { "name": "Veg Mastani / व्हेज मस्तानी", "price": "₹230" },
    { "name": "Veg Mughlai / भाजी मुगलाई", "price": "₹230" },
    { "name": "Veg Roshani / व्हेज रोशनी", "price": "₹220" },
    { "name": "Veg Tiranga / व्हेज तिरंगा", "price": "₹340" },
    { "name": "Veg Kuma / व्हेज कुमा", "price": "₹230" },
    { "name": "Veg Kofta / व्हेज कोफ्ता", "price": "₹220" },
    { "name": "Chana Green Peas Masala / चणे हिरवे वाटाणे मसाला", "price": "₹190" },
    { "name": "Chana Masala / चणा मसाला", "price": "₹170" },
    { "name": "Cheese Angori / चीज अंगोरी", "price": "₹240" },
    { "name": "Harabhara Kabab Masala / हरभरा कबाबा मसाला", "price": "₹210" },
    { "name": "Hydrabadi Chatpata / हैद्राबादी चटपटा", "price": "₹310" },
    { "name": "Mushroom Masala / मशरूम मसाला", "price": "₹240" },
    { "name": "Mushroom Hydrabadi Masala / मशरूम हैद्राबादी मसाला", "price": "₹250" },
    { "name": "Mushroom Tikka Masala / मशरूम टिक्का मसाला", "price": "₹260" },
    { "name": "Mushroom Kaju Masala / मशरुम काजू मसाला", "price": "₹280" },
    { "name": "Dal Fry / डाल फ्राय", "price": "₹130" },
    { "name": "Dal Tadka / डाल तडका", "price": "₹140" },
    { "name": "Dal Khichdi / दाल खिचडी", "price": "₹150" },
    { "name": "Dal Khichdi Tadka / दाल खिचडी तडका", "price": "₹160" },
    { "name": "Paneer Masala / पनीर मसाला", "price": "₹170" }
  ],
  "Paneer & Kaju Special / पनीर व काजू स्पेशल": [
    { "name": "Dudh Paneer Masala / दूध पनीर मसाला", "price": "₹190" },
    { "name": "Panneer Pakoda / पनीर पकोडा", "price": "₹160" },
    { "name": "Paneer Palak Masala / पनीर पालक मसाला", "price": "₹190" },
    { "name": "Paneer Mutter Masala / पनीर मटर मसाला", "price": "₹190" },
    { "name": "Paneer Kolhapuri / पनीर कोल्हापुरी", "price": "₹190" },
    { "name": "Paneer Butter Masala / पनीर बटर मसाला", "price": "₹190" },
    { "name": "Panneer Aloo Mutter Masala / पनीर आलू मटर मसाला", "price": "₹280" },
    { "name": "Paneer Amritsari / पनीर अमृतसरी", "price": "₹260" },
    { "name": "Paneer Angara / पनीर अंगारा", "price": "₹260" },
    { "name": "Paneer Bhuna / पनीर भुना", "price": "₹220" },
    { "name": "Paneer Bhurji / पनीर भुर्जी", "price": "₹220" },
    { "name": "Paneer Chatapata / पनीर चटपटा", "price": "₹280" },
    { "name": "Paneer Hawaii / पनीर हवाई", "price": "₹290" },
    { "name": "Paneer Kadai / पनीर कढाई", "price": "₹240" },
    { "name": "Paneer Kasturi / पनीर कस्तुरी", "price": "₹230" },
    { "name": "Paneer Khajana / पनीर खजाना", "price": "₹270" },
    { "name": "Paneer Koliwada Masala / पनीर कोलीवाडा मसाला", "price": "₹200" },
    { "name": "Paneer Labadar / पनीर लबदार", "price": "₹280" },
    { "name": "Paneer Lachedar / पनीर लाचेदार", "price": "₹240" },
    { "name": "Paneer Napoleon / पनीर नेपोलियन", "price": "₹290" },
    { "name": "Paneer Maratha / पनीर मराठा", "price": "₹220" },
    { "name": "Paneer Saathe / पनीर साठे", "price": "₹240" },
    { "name": "Paneer Patiala / पनीर पटियाला", "price": "₹240" },
    { "name": "Paneer Tawa / पनीर तवा", "price": "₹240" },
    { "name": "Paneer Mushroom Masala / पनीर मशरूम मसाला", "price": "₹250" },
    { "name": "Masala Paneer Special / मसाला पनीर स्पेशल", "price": "₹290" },
    { "name": "Shahi Paneer / शाही पनीर", "price": "₹230" },
    { "name": "Paneer Cheese Mutter Masala / पनीर चीज मटर मसाला", "price": "₹230" },
    { "name": "Kaju Paneer Masala / काजू पनीर मसाला", "price": "₹240" },
    { "name": "Kaju Paneer Butter Masala / काजू पनीर बटर मसाला", "price": "₹280" },
    { "name": "Kaju Paneer Chandigarh / काजू पनीर चंदीगड", "price": "₹290" },
    { "name": "Kaju Paneer Kadai / काजू पनीर कढई", "price": "₹280" },
    { "name": "Kaju Masala / काजू मसाला", "price": "₹220" },
    { "name": "Kaju Curry / काजू करी", "price": "₹210" },
    { "name": "Kaju Mumataaj / काजू मुमताज", "price": "₹310" },
    { "name": "Paneer Pasanda / पनीर पसंदा", "price": "₹270" },
    { "name": "Paneer Makhni / पनीर मखनी", "price": "₹280" }
 
  ],
  
  "Veg Handi Special / व्हेज हंडी स्पेशल": [
    { "name": "ShevBhaji Handi (Full/Half) / शेवभाजी हंडी", "price": "₹360 / ₹240" },
    { "name": "Shev Bhaji Tadaka Handi (Full/Half) / शेवभाजी तडका", "price": "₹420 / ₹280" },
    { "name": "Soyabean Masala Handi (Full/Half) / सोयाबीन मसाला हंडी", "price": "₹480 / ₹320" },
    { "name": "Dal Khichdi Handi (Full/Half) / दाल खिचडी हंडी", "price": "₹420 / ₹310" },
    { "name": "Dal Tadaka Handi (Full/Half) / दाल तडका हंडी", "price": "₹390 / ₹280" },
    { "name": "Baingan Masala Handi (Full/Half) / बैंगन मसाला हंडी", "price": "₹510 / ₹350" },
    { "name": "Shevaga Handi / शेवगा हंडी", "price": "₹420 / ₹250" },
    { "name": "Chana Masala Handi / चणा मसाला हंडी", "price": "₹450 / ₹320" },
    { "name": "Green Peas Masala Handi / ग्रीन पीस मसाला हंडी", "price": "₹460 / ₹290" },
    { "name": "Mix Veg Handi / मिक्स व्हेज हंडी", "price": "₹480 / ₹320" },
    { "name": "Veg Handi / व्हेज हंडी", "price": "₹480 / ₹320" },
    { "name": "Veg Diwani Handi / व्हेज दिवाणी हंडी", "price": "₹480 / ₹320" },
    { "name": "Veg Kolhapuri Handi / व्हेज कोल्हापुरी हंडी", "price": "₹480 / ₹320" },
    { "name": "Veg Maratha Handi / व्हेज मराठा हंडी", "price": "₹570 / ₹380" },
    { "name": "Veg Patiala Handi / व्हेज पटियाला हंडी", "price": "₹660 / ₹440" },
    { "name": "Paneer Masala Handi / पनीर मसाला हंडी", "price": "₹570 / ₹290" },
    { "name": "Paneer Butter Masala Handi / पनीर बटर मसाला हंडी", "price": "₹690 / ₹460" },
    { "name": "Paneer Tikka Masala Handi / पनीर टिक्का मसाला हंडी", "price": "₹680 / ₹390" },
    { "name": "Paneer Mutter Masala Handi / पनीर मटर मसाला हंडी", "price": "₹530 / ₹320" },
    { "name": "Paneer Patiala Handi / पनीर पटीयाला हंडी", "price": "₹690 / ₹480" },
    { "name": "Shahi Paneer Handi / शाही पनीर हंडी", "price": "₹690 / ₹460" },
    { "name": "Paneer Amritsari Handi / पनीर अमरूसरी हंडी", "price": "₹690 / ₹460" },
    { "name": "Paneer Chatpata Handi / पनीर चटपटा हंडी", "price": "₹690 / ₹460" },
    { "name": "Kaju Curry Handi / काजू करी हंडी", "price": "₹580 / ₹390" },
    { "name": "Kaju Masala Handi / काजू मसाला हंडी", "price": "₹640 / ₹440" },
    { "name": "Kaju Paneer Masala Handi / काजू पनीर मसाला हंडी", "price": "₹640 / ₹440" },
    { "name": "Mushroom Masala Handi / मशरुम मसाला हंडी", "price": "₹690 / ₹460" }
  ]
},
  nonveg: {
   "Chicken": [
      
  
  // Non Veg Soup / नॉन व्हेज सूप
  { "name": "Chicken Soup/चिकन सूप", "price": "₹140" },
  { "name": "Chicken Clear Soup/चिकन क्लिअर सूप", "price": "₹140" },
  { "name": "Chicken Hot & Sour Soup/चिकन हॉट & सोर सूप", "price": "₹160" },
  { "name": "Chicken Manchow Soup/चिकन मंचाव सूप", "price": "₹120" },
  { "name": "Chicken Paper Noodles Soup/चिकन पेपर नूडल सूप", "price": "₹140" },
  { "name": "Chicken Ukkad/चिकन उकड", "price": "₹160" },
  { "name": "Cream of Chicken Soup/चिकन सूप क्रीम", "price": "₹140" },
  { "name": "Mutton Ukkad/मटण उकड", "price": "₹220" }
]
,
  
   "Non Veg Chinese Starters / नॉनव्हेज चायनीज स्टार्टर्स":[

  // Non Veg Chinese Starters / नॉनव्हेज चायनीज स्टार्टर्स
  { "name": "Chicken 65/चिकन ६५", "price": "₹240" },
  { "name": "Chicken Crispy/चिकन क्रिस्पी", "price": "₹240" },
  { "name": "Chicken Chill Gravy/चिकन चिल ग्रेव्ही", "price": "₹230" },
  { "name": "Chicken Chill Dry/चिकन चिली ड्राय", "price": "₹210" },
  { "name": "Chicken Manchurian/चिकन मंचुरियन", "price": "₹210" },
  { "name": "Chicken Lolipop/चिकन लॉलीपॉप", "price": "₹200" },
  { "name": "Chicken Saathe/चिकन साठे", "price": "₹240" },
  { "name": "Chicken Crunchy/चिकन क्रची", "price": "₹240" },
  { "name": "Chicken Stap Lolipop/चिकन स्टॉप लॉलीपॉप", "price": "₹230" },
  { "name": "Chicken Apple Lolipop/चिकन अँपल लॉलीपॉप", "price": "₹250" },
  { "name": "Chicken Golden Finger/चिकन गोल्डन फिंगर", "price": "₹250" },
  { "name": "Chicken Gold Cone/चिकन गोल्ड कोन", "price": "₹210" },
  { "name": "Garlic Paper Chicken/गार्लिक पेपर चिकन", "price": "₹300" },
  { "name": "Egg Chilli/एग चिल्ली", "price": "₹140" }
],

  // Divider / विभाग ओळख
  "Non Veg Tandoor/ Kabab / नॉन व्हेज तंदूर / कबाब":[

  // Non Veg Tandoor/ Kabab / नॉन व्हेज तंदूर / कबाब
  { "name": "Chicken Reshmi Kabab/चिकन रेशमी कबाब", "price": "₹260" },
  { "name": "Chicken Malai Kabab/चिकन मलाई कबाब", "price": "₹260" },
  { "name": "Chicken Seekh Kabab/चिकन सिख कबाब", "price": "₹260" },
  { "name": "Chicken Kalimiri Kabab/चिकन कालीमिरी कबाब", "price": "₹280" },
  { "name": "Chicken Angara Kabab/चिकन अंगारा कबाब", "price": "₹240" },
  { "name": "Chicken Sultani Kabab/चिकन सुलतानी कबाब", "price": "₹240" },
  { "name": "Chicken Achaari Kabab/चिकन आचारी कबाब", "price": "₹240" },
  { "name": "Chicken Golden Kabab/चिकन गोल्डन कबाब", "price": "₹260" },
  { "name": "Chicken Tangri Kabab/चिकन तंगरी कबाब", "price": "₹300" },
  { "name": "Chicken Kabab/चिकन कबाब", "price": "₹280" },
  { "name": "Chicken Tikka/चिकन टिक्का", "price": "₹280" },
  { "name": "Chicken Tandoori Lolipop/चिकन तंदुरी लॉलीपॉप", "price": "₹240" },
  { "name": "Chicken Kalimiri Tikka/चिकन कालीमिरी टिक्का", "price": "₹240" },
  { "name": "Chicken Malai Tikka/चिकन मलाई टिक्का", "price": "₹280" },
  { "name": "Chicken Pahadi Tikka/चिकन पहाडी टिक्का", "price": "₹280" },
  { "name": "Chicken Tandoor/ Raan/चिकन तंदूर/रान", "price": "₹480/₹250" }],

  // Divider
  "Non Veg Chinese / नॉन व्हेज चायनीज":[

  // Non Veg Chinese / नॉन व्हेज चायनीज
  { "name": "Chicken Fried Rice/चिकन फ्राईड राईस", "price": "₹200" },
  { "name": "Chicken Schezwan Rice/चिकन शेझवान राईस", "price": "₹220" },
  { "name": "Chicken Singapore Rice/चिकन सिंगापूर राईस", "price": "₹220" },
  { "name": "Chicken Chopper Rice/चिकन चॉपर राईस", "price": "₹280" },
  { "name": "Chicken Combination Rice/चिकन कॉम्बिनेशन राईस", "price": "₹240" },
  { "name": "Chicken Manchurian Rice/चिकन मंचुरियन राईस", "price": "₹260" },
  { "name": "Chicken Tripple Fried Rice/चिकन ट्रिपल फ्राईड राईस", "price": "₹220" },
  { "name": "Chicken Tripple Schezwan Rice/चिकन ट्रिपल शेझवान राईस", "price": "₹240" },
  { "name": "Chicken Tripple Fried Noodles/चिकन ट्रिपल फ्राईड नूडल्स", "price": "₹220" },
  { "name": "Chicken Tripple Schezwan Noodles/चिकन ट्रिपल शेझवान नूडल्स", "price": "₹240" },
  { "name": "Chicken Hakka Noodles/चिकन हक्का नूडल्स", "price": "₹200" },
  { "name": "Chicken Schezwan Noodles/चिकन शेझवान नूडल्स", "price": "₹210" },
  { "name": "Chicken Hong Kong Rice/चिकन हाँगकाँग राईस", "price": "₹210" },
  { "name": "Chicken Singapore Noodles/चिकन सिंगापूर नूडल्स", "price": "₹220" },
  { "name": "Chicken Lolipop Gravy/चिकन लॉलीपॉप ग्रेव्ही", "price": "₹220" },
  { "name": "Chicken Kebsa Rice/चिकन केसबा राईस", "price": "₹800/₹450" },
  { "name": "Chicken Packing Rice/चिकन पॅकिंग राईस", "price": "₹250" },
  { "name": "Chicken Boxer Rice/चिकन बॉक्सर राईस", "price": "₹300" },
  { "name": "Egg Fried Rice/एग फ्राईड राईस", "price": "₹160" }],

  // Divider
 " Non Veg Main Course / नॉन व्हेज मेन कोर्स":[

  // Non Veg Main Course / नॉन व्हेज मेन कोर्स
  { "name": "Chicken Masala/चिकन मसाला", "price": "₹200" },
  { "name": "Chicken Masala Boneless/चिकन मसाला बोनलेस", "price": "₹220" },
  { "name": "Chicken Kadai/चिकन कढाई", "price": "₹240" },
  { "name": "Chicken Kolhapuri/चिकन कोल्हापुरी", "price": "₹220" },
  { "name": "Chicken Mirchi Masala/चिकन मिर्ची मसाला", "price": "₹200" },
  { "name": "Chicken Banjara Tikka Masala/चिकन बंजारा टिक्का मसाला", "price": "₹260" },
  { "name": "Chicken Bhunda Masala/चिकन भूना मसाला", "price": "₹220" },
  { "name": "Chicken Hyderabadi Masala/चिकन हैदराबादी मसाला", "price": "₹260" },
  { "name": "Chicken Kalimiri Tikka Masala/चिकन कालीमिरी टिक्का मसाला", "price": "₹240" },
  // Non Veg Masala / Specials / नॉन व्हेज मसाला / स्पेशल्स
  { "name": "Chicken Tikka Masala/चिकन टिक्का मसाला", "price": "₹250" },
  { "name": "Chicken Tandoori Kabab Masala/चिकन तंदुरी कबाब मसाला", "price": "₹300" },
  { "name": "Chicken Afghani/चिकन अफगाणी", "price": "₹300" },
  { "name": "Chicken Tiranga/चिकन तिरंगा", "price": "₹400" },
  { "name": "Chicken Maratha/चिकन मराठा", "price": "₹220" },
  { "name": "Butter Chicken/बटर चिकन", "price": "₹240" },
  { "name": "Chicken Angara Masala/चिकन अंगारा मसाला", "price": "₹280" },
  { "name": "Chicken Boil/चिकन बॉईल", "price": "₹150" },
  { "name": "Chicken Curry/चिकन करी", "price": "₹180" },
  { "name": "Chicken Fry/चिकन फ्राय", "price": "₹200" },
  { "name": "Chicken Roast/चिकन रोस्ट", "price": "₹220" },
  { "name": "Chicken Patiala/चिकन पटियाला", "price": "₹240" },
  { "name": "Chicken Kabab Masala/चिकन कबाब मसाला", "price": "₹260" },
  { "name": "Chicken Lapeta/चिकन लपेटा", "price": "₹220" },
  { "name": "Chicken Lolipop Masala/चिकन लॉलीपॉप मसाला", "price": "₹240" },
  { "name": "Chicken Malavani Plate/चिकन मालवणी प्लेट", "price": "₹280" }],
  "Mutton Masala / मटण मसाला ":[
  
  // Mutton Masala / मटण मसाला
  { "name": "Mutton Masala/मटण मसाला", "price": "₹260" },
  { "name": "Mutton Bhuna Masala/मटण भूना मसाला", "price": "₹280" },
  { "name": "Mutton Hyderabadi Masala/मटण हैद्राबादी मसाला", "price": "₹270" },
  { "name": "Mutton Kadai/मटण कढाई", "price": "₹300" },
  { "name": "Mutton Kheema Masala/मटण खिमा मसाला", "price": "₹320" },
  { "name": "Mutton Kolhapuri/मटण कोल्हापुरी", "price": "₹300" },
  { "name": "Mutton Lapeta/मटण लपेटा", "price": "₹320" },
  { "name": "Mutton Malavani Plate/मटण मालवणी प्लेट", "price": "₹350" },
  { "name": "Mutton Fry/मटण फ्राय", "price": "₹260" }],
   "Egg / Anda / अंडा":[
  
  // Egg / Anda / अंडा
  { "name": "Egg/Anda Masala/अंडा मसाला", "price": "₹260" },
  { "name": "Egg/Anda Curry/अंडा करी", "price": "₹170" },
  { "name": "Egg/Anda Bhurji/अंडा भुर्जी", "price": "₹160" },
  { "name": "Egg/Anda Boil/अंडा बॉईल", "price": "₹80" },
  { "name": "Egg/Anda Half Fry/अंडा हाफ फ्राय", "price": "₹80" },
  { "name": "Omelet/ऑम्लेट", "price": "₹80" },
  { "name": "Omelet Pav/ऑम्लेट पाव", "price": "₹80" },
  { "name": "Egg Anda Boil Fry/अंडा बॉईल फ्राय", "price": "₹100" }],
   "Fish / फिश ":[
  
  // Fish / फिश
  { "name": "Bombil Fry/बोंबील फ्राय", "price": "₹140" },
  { "name": "Fish Fry/फिश फ्राय", "price": "₹220" },
  { "name": "Fish Roast/फिश रोस्ट", "price": "₹220" },
  { "name": "Fish Curry/फिश करी", "price": "₹230" },
  { "name": "Fish Masala/फिश मसाला", "price": "₹240" }



    ],
    "🍲 Non Veg Handi Special / नॉन व्हेज हंडी स्पेशल": [
      // 🍲 Non Veg Handi Special / नॉन व्हेज हंडी स्पेशल
  { "name": "Butter Chicken Handi/बटर चिकन हंडी", "price": "₹700/390" },
  { "name": "Chicken Fry Handi/चिकन फ्राय हंडी", "price": "₹620/350" },
  { "name": "Chicken Handi/चिकन हंडी", "price": "₹600/350" },
  { "name": "Chicken Hydrabadi Handi/चिकन हैदराबादी हंडी", "price": "₹640/380" },
  { "name": "Chicken Kadai Handi/चिकन कढाई हंडी", "price": "₹700/410" },
  { "name": "Chicken Kolhapuri Handi/चिकन कोल्हापुरी हंडी", "price": "₹620/350" },
  { "name": "Chicken Lapeta Handi/चिकन लपेटा हंडी", "price": "₹710/400" },
  { "name": "Chicken Malavani Handi/चिकन मालवणी हंडी", "price": "₹650/380" },
  { "name": "Chicken Tikka Masala Handi/चिकन टिक्का मसाला हंडी", "price": "₹620/350" },
  { "name": "Chicken Rassa Handi/चिकन रस्सा हंडी", "price": "₹260/150" },
  { "name": "Mutton Masala Handi/मटण मसाला हंडी", "price": "₹900/500" },
  { "name": "Mutton Malavani Handi/मटण मालवणी हंडी", "price": "₹1000/550" },
  { "name": "Fish Masala Handi/फिश मसाला हंडी", "price": "₹800/450" },
  { "name": "Egg/Anda Curry Handi/अंडा करी हंडी", "price": "₹480/320" }

    ],
    "🍛 Non Veg Biryani/Pulav / नॉन व्हेज बिर्याणी / पुलाव स्पेशल": [
       // 🍛 Non Veg Biryani/Pulav / नॉन व्हेज बिर्याणी / पुलाव स्पेशल
  { "name": "Aalani Bhaat/आळणी राईस", "price": "₹180" },
  { "name": "Chicken Biryani/चिकन बिर्याणी", "price": "₹220" },
  { "name": "Chicken Hydrabadi Biryani/चिकन हैद्राबादी बिर्याणी", "price": "₹240" },
  { "name": "Chicken Dum Biryani/चिकन दम बिर्याणी", "price": "₹260" },
  { "name": "Chicken Pulav/चिकन पुलाव", "price": "₹230" },
  { "name": "Mutton Biryani/मटण बिर्याणी", "price": "₹300" },
  { "name": "Mutton Dum Biryani/मटण दम बिर्याणी", "price": "₹320" },
  { "name": "Mutton Hydrabadi Biryani/मटण हैद्राबादी बिर्याणी", "price": "₹370" },
  { "name": "Egg / Anda Biryani/अंडा बिर्याणी", "price": "₹200" },
  { "name": "Egg / Anda Pulav/अंडा पुलाव", "price": "₹160" }
    ],
    "Non Veg Thali Special / नॉन व्हेज थाळी स्पेशल": [
      
  {
    "name": "Chicken Thali (Massa & Pice, Soup, Rice, 2 Roti)/चिकन थाळी (रस्सा, पिस, सूप, राईस, २ रोटरी)",
    "price": "₹220"
  },
  {
    "name": "Chicken Standard Thali (Rassa & Fry, Sukat, Soup, Boil Egg, Rice, 2 Roti)/चिकन स्टॅण्डर्ड थाळी (रस्सा, फ्राय, सुकट, सूप, बीईल, राईस, २ रोटी)",
    "price": "₹260"
  },
  {
    "name": "Chicken Special Thali (Massa, Fry, Soup, Chass, Kheema, Sukat, Boil Egg, Rice, 2 Roti, Sweet)/चिकन स्पेशल थाळी (रस्सा, फ्राय, सूप, खिमा, सुकट, बीईल, राईस, २ रोटी, छास, स्वीट)",
    "price": "₹350"
  },
  {
    "name": "Mutton Thali (Rassa & Pice, Soup, 2 Roti, Rice)/मटण थाळी (रस्सा, पिस, सूप, २ रोटी, राईस)",
    "price": "₹280"
  },
  {
    "name": "Mutton Standard Thali (Rassa, Fry, Soup, Sukat, Boil Egg, Rice, 2 Roti)/मटण स्टॅण्डर्ड थाळी (रस्सा, फ्राय, सूप, सुकट, अंडा बोईल, २ रोटी, राईस)",
    "price": "₹350"
  },
  {
    "name": "Mutton Special Thali (Rassa, Fry, Soup, Kheema, Sukat, Boil Egg, Rice, 2 Roti, Chass, Sweet)/मटण स्पेशल थाळी (रस्सा, फ्राय, सूप, खिमा, सुकट, अंडा बोईल, राईस, २ रोटी, छास, स्वीट)",
    "price": "₹480"
  },
  {
    "name": "Fish Special Thali (Rassa, Fry, Egg Bhurji, Rice, 2 Roti, Chass)/फिश स्पेशल थाळी (रस्सा, फ्राय, भुर्जी, राईस, २ रोटी, छास)",
    "price": "₹280"
  },
  {
    "name": "Egg Special Thali (Rassa, Fry, Egg Bhurji, Rice, 2 Roti, Chass)/अंडा स्पेशल थाळी (रस्सा, फ्राय, भुर्जी, राईस, २ रोटी, छास)",
    "price": "₹220"
  }


    ]
  }
};

//ash
const subcategoryImages = {
    // Veg Images
    "Veg Special Starters / व्हेज स्पेशल स्टार्टर्स": "images/starter.jpeg", // General Veg Starters Platter
    "Veg Biryani / Pulav / व्हेज बिर्याणी / पुलाव": "images/vegbiryani.jpg", // Veg Biryani/Pulav
    "Maharashtrian Nasta / महाराष्ट्रीयन नाष्टा": "images/Maharashtrian.webp", // Pav Bhaji/Nasta
    "Raita/Salad/Papad / राईता / सलाड / पापड": "images/rayta.jpeg", // Raita/Dahi
    "Veg Chinese Continued / व्हेज चायनीज": "images/c.jpeg", // Veg Manchurian/Chinese
    "Beverages/ शीतपेय": "images/bevrage.jpeg", // Masala Chaas/Beverages
    "South Indian Special / साऊथ इंडियन स्पेशल": "images/south.jpeg", // Masala Dosa
    "Sandwiches, Parathas & Sweets / सॅन्डविच, पराठे आणि गोड पदार्थ": "images/sand.jpeg", // Aloo Paratha
    "Veg Main Course / व्हेज मेन कोर्स": "images/main.jpeg", // Mix Veg Curry
    "Paneer & Kaju Special / पनीर व काजू स्पेशल": "images/panner and kaju.jpeg", // Shahi Paneer/Kaju Dish
    "Veg Handi Special / व्हेज हंडी स्पेशल": "images/handi.jpeg", // Veg Handi/Korma


    "Chicken": "images/1.jpeg",
    "Non Veg Chinese Starters / नॉनव्हेज चायनीज स्टार्टर्स": "images/2.jpeg",
    "Non Veg Tandoor/ Kabab / नॉन व्हेज तंदूर / कबाब": "images/kabab.jpeg",
    "Non Veg Chinese / नॉन व्हेज चायनीज": "images/n.jpeg",
    " Non Veg Main Course / नॉन व्हेज मेन कोर्स": "images/4.jpeg",
    " Non Veg Main Course / नॉन व्हेज मेन कोर्स": "images/4.jpeg",
    "Mutton Masala / मटण मसाला ": "images/5.jpeg",
    "Egg / Anda / अंडा": "images/eggs.jpeg",
    "Fish / फिश ": "images/8.jpeg",
    "🍲 Non Veg Handi Special / नॉन व्हेज हंडी स्पेशल": "images/10.jpeg",
    "🍛 Non Veg Biryani/Pulav / नॉन व्हेज बिर्याणी / पुलाव स्पेशल": "images/9.jpeg",
    "Non Veg Thali Special / नॉन व्हेज थाळी स्पेशल": "images/thali.jpeg"

}
//ash
let currentCat = 'veg';
let currentSub = Object.keys(menu[currentCat])[0];

// Render subcategories
function renderSubcats() {
  const subDiv = document.getElementById('subcat');
  subDiv.innerHTML = '';
  Object.keys(menu[currentCat]).forEach(sub=>{
    const div = document.createElement('div');
    // Use 'currentSub' for active class toggle
    div.className = sub===currentSub ? 'active':''; 
    div.innerText = sub;
//     div.onclick = ()=>{ currentSub=sub; renderSubcats(); renderItems(); };
div.onclick = () => {
  currentSub = sub;
  renderSubcats();
  renderItems();

  // Smooth scroll to menu items
  document.getElementById('menuItems').scrollIntoView({ 
    behavior: 'smooth' 
  });
};

    subDiv.appendChild(div);
  });
}

// Render items
function renderItems() {
  const itemDiv = document.getElementById('menuItems');
  itemDiv.innerHTML = '';
  // Check if the current subcategory exists before trying to access it
  if (!menu[currentCat] || !menu[currentCat][currentSub]) return; 

  // Add category title before items
  const title = document.createElement('div');
  title.className = 'category-title';
  title.textContent = currentSub;
  itemDiv.appendChild(title);

  menu[currentCat][currentSub].forEach(item=>{
    const div = document.createElement('div');
    div.className='item';

    // Add the veg/nonveg indicator based on the main category
    const indicator = currentCat === 'veg' ? '<span class="veg">●</span> ' : '<span class="nonveg">●</span> ';

    div.innerHTML = `<span>${indicator}${item.name}</span><span><strong>${item.price}</strong></span>`;
    itemDiv.appendChild(div);
  });
}

// Switch category function called by the main tabs
// function switchCategory(cat){
//   currentCat=cat;
//   // Set the current subcategory to the first one in the new category
//   currentSub=Object.keys(menu[cat])[0];
//   
//   // Update tab active styles
//   document.querySelectorAll('.tabs .tab').forEach(t=>t.classList.remove('active'));
//   document.querySelector(`.tabs .tab:nth-child(${cat==='veg' ? 1 : 2})`).classList.add('active');
//   
//   renderSubcats();
//   renderItems();
// }

// // Initial render
// switchCategory('veg'); // Start with the Veg menu
function switchCategory(cat) {
  currentCat = cat;
  // Set the current subcategory to the first one in the new category
  currentSub = Object.keys(menu[cat])[0];

  // Remove old classes from all tabs
  document.querySelectorAll('.tabs .tab').forEach(t => {
    t.classList.remove('active', 'veg-active', 'nonveg-active');
  });

  // Add proper class to clicked tab
  const selectedTab = document.querySelector(`.tabs .tab:nth-child(${cat === 'veg' ? 1 : 2})`);
  selectedTab.classList.add('active', cat === 'veg' ? 'veg-active' : 'nonveg-active');

  renderSubcats();
  renderItems();
}

// Initial render
switchCategory('veg'); // Start with Veg

//ashirwad code

const menuContainer = document.getElementById('menu');

nonveg.Chicken.forEach(item => {
  const div = document.createElement('div');

  if (item.price === "") {
    // Divider line
    div.className = 'divider';
    div.textContent = item.name.replace(/\*+/g, ''); // remove asterisks
  } else {
    // Regular menu item
    div.className = 'menu-item';
    div.innerHTML = `<span class="item-name">${item.name}</span><span class="item-price">${item.price}</span>`;
  }

  menuContainer.appendChild(div);
});




function renderSubcats() {
    const subDiv = document.getElementById('subcat');
    subDiv.innerHTML = '';
    
    Object.keys(menu[currentCat]).forEach(sub => {
        const div = document.createElement('div');
        
        // Use 'currentSub' for active class toggle
        div.className = sub === currentSub ? 'tab-image-button active' : 'tab-image-button';
        
        // **NEW: Create the image element**
        const img = document.createElement('img');
        img.src = subcategoryImages[sub] || 'path/to/default_image.png'; // Get image from map, use a default if not found
        img.alt = sub.split(' / ')[0]; // Use English part of the name for alt text
        img.className = 'subcat-icon';
        
        // **NEW: Create the text label**
        const span = document.createElement('span');
        span.innerText = sub;
        
        // Append image and text to the div (in the order you want)
        div.appendChild(img);
        div.appendChild(span);

        // Keep the existing click functionality
        // div.onclick = () => { currentSub = sub; renderSubcats(); renderItems(); };
        div.onclick = () => {
  currentSub = sub;
  renderSubcats();
  renderItems();

  // Smooth scroll to menu items
  document.getElementById('menuItems').scrollIntoView({ 
    behavior: 'smooth' 
  });
};

        
        subDiv.appendChild(div);
    });
}