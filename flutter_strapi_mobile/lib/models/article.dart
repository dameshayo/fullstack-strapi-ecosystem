class Article {
  final int id;
  final String title;
  final String slug;
  final String summary;
  final String? category;
  final String? coverUrl;
  final String createdAt;

  Article({
    required this.id,
    required this.title,
    required this.slug,
    required this.summary,
    this.category,
    this.coverUrl,
    required this.createdAt,
  });

  factory Article.fromJson(Map<String, dynamic> json) {
    final attributes = json; // Strapi v5 flat structure

    String? imageUrl;
    if (attributes['cover'] != null && attributes['cover']['url'] != null) {
      imageUrl = attributes['cover']['url'];
    }

    return Article(
      id: json['id'],
      title: attributes['title'] ?? 'Untitled',
      slug: attributes['slug'] ?? '',
      summary: attributes['summary'] ?? '',
      category: attributes['category'],
      coverUrl: imageUrl,
      createdAt: attributes['createdAt'] ?? '',
    );
  }
}
