import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import '../models/article.dart';

class ApiService {
  // Configured for Android Emulator (Change to 127.0.0.1 for iOS Simulator)
  static final String baseUrl =
      Platform.isAndroid ? 'http://10.0.2.2:1337' : 'http://127.0.0.1:1337';

  static Future<List<Article>> fetchArticles() async {
    final response =
        await http.get(Uri.parse('$baseUrl/api/articles?populate=*'));

    if (response.statusCode == 200) {
      final Map<String, dynamic> body = json.decode(response.body);
      final List<dynamic> data = body['data'];
      return data.map((item) => Article.fromJson(item)).toList();
    } else {
      throw Exception('Failed to load articles from Strapi');
    }
  }

  static String getFullImageUrl(String? relativeUrl) {
    if (relativeUrl == null || relativeUrl.isEmpty) {
      return 'https://via.placeholder.com/600x300';
    }
    if (relativeUrl.startsWith('http')) return relativeUrl;
    return '$baseUrl$relativeUrl';
  }
}
