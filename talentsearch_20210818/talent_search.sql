-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- 생성 시간: 21-10-06 21:21
-- 서버 버전: 10.3.31-MariaDB-cll-lve
-- PHP 버전: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `gwofqjnv_search`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `campaign`
--

CREATE TABLE `campaign` (
  `id` int(11) UNSIGNED NOT NULL,
  `campaign_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `campaign_belong` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `campaign_company` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `campaign_comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `public_view_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `public_edit_date` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `net_price` tinyint(4) NOT NULL,
  `gross_price` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `campaign`
--

INSERT INTO `campaign` (`id`, `campaign_name`, `type`, `campaign_belong`, `campaign_company`, `campaign_comment`, `public_view_date`, `public_edit_date`, `net_price`, `gross_price`) VALUES
(1, 'Test Campaign1', 'instagram', 'Test Tantosha1', 'Test Company1', 'Test Comment1', '2021-10-09', '2021-10-13', 1, 1),
(3, 'Test Campaign-Copy', 'instagram', 'Test Tantosha', 'Test Company', 'Test Comment', NULL, NULL, 0, 0),
(4, 'A', 'instagram', '', '', 'D', NULL, NULL, 0, 0),
(5, 'テスト2', 'instagram', '髙橋様', '株式会社テスト', 'dior案件', NULL, NULL, 0, 0),
(8, 'テスト5', 'instagram', 'Test Tantosha1', 'Test Company1', 'Test Comment1', NULL, NULL, 0, 0);

-- --------------------------------------------------------

--
-- 테이블 구조 `comment`
--

CREATE TABLE `comment` (
  `id` int(11) UNSIGNED NOT NULL,
  `talent_id` int(11) NOT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `comment`
--

INSERT INTO `comment` (`id`, `talent_id`, `comment`, `created_at`) VALUES
(1, 1, 'コメント', '2021-09-09 00:07:35'),
(2, 1, 'テスト\n', '2021-09-09 01:35:41'),
(3, 1, 'テスト', '2021-09-09 01:55:18'),
(4, 3, 'テスト', '2021-09-09 16:50:01'),
(5, 1, 'テスト', '2021-09-14 03:21:20'),
(6, 1, 'https://twitter.com/pecotecooo', '2021-09-16 08:39:14'),
(7, 29, '単発でのタイアップ投稿は当面受けていない、現在継続的な案件もしくは本人がオーガニックで使用している案件のみお引き受け2021/2/4', '2021-09-22 08:20:08'),
(8, 1, '飲食PR無料', '2021-09-24 12:17:16');

-- --------------------------------------------------------

--
-- 테이블 구조 `context`
--

CREATE TABLE `context` (
  `id` int(11) NOT NULL,
  `content` text DEFAULT NULL,
  `json` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 테이블의 덤프 데이터 `context`
--

INSERT INTO `context` (`id`, `content`, `json`) VALUES
(1, ' 1 三上悠亜 shibanan.channel@gmail.com 2 みかみ 000-0000-0000 三上 000-0000 1993-06-19 普通 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 2764000 https://www.instagram.com/yua_mikami/ 1000000 小池 0000000 64.00 36.00 28 東京 YouTuber 123456  三上悠亜 2.52 ○ [\"モデル\"] 花王YoutubePR 2010000 https://twitter.com/yua_mikami 0  419000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00 20.00 2400000 https://www.tiktok.com/@yua_mikami?lang=ja-JP  0 0  0 0 0 0 0  三井住友銀行 新宿 アダルト\r\nセクシー女優 インスタグラム1投稿コスメ100件         ', '{\"id\":\"1\",\"name\":\"\\u4e09\\u4e0a\\u60a0\\u4e9c\",\"email\":\"shibanan.channel@gmail.com\",\"gender\":\"2\",\"post\":\"\\u307f\\u304b\\u307f\",\"tel_number\":\"000-0000-0000\",\"account_kana\":\"\\u4e09\\u4e0a\",\"zip_code\":\"000-0000\",\"birthday\":\"1993-06-19\",\"account_type\":\"\\u666e\\u901a\",\"province\":\"\\u6771\\u4eac\\u90fd\",\"district_num\":\"\\u65b0\\u5bbf\\u533a\\u539f\\u753a3-37-1\",\"building_name\":\"\\u30cf\\u30fc\\u30e2\\u30cb\\u30fc\\u30ec\\u30b8\\u30c7\\u30f3\\u30b9\\u65e9\\u7a32\\u7530\\u590f\\u76ee\\u5742901\",\"it_fw\":\"2764000\",\"it_url\":\"https:\\/\\/www.instagram.com\\/yua_mikami\\/\",\"amount\":\"1000000\",\"charge_name\":\"\\u5c0f\\u6c60\",\"account_number\":\"0000000\",\"it_male_ratio\":\"64.00\",\"it_female_ratio\":\"36.00\",\"age\":\"28\",\"activity_base\":\"\\u6771\\u4eac\",\"genre\":\"YouTuber\",\"line_id\":\"123456\",\"pr_point\":\"\",\"profile_name\":\"\\u4e09\\u4e0a\\u60a0\\u4e9c\",\"eg_rate\":\"2.52\",\"app_post\":\"\\u25cb\",\"belonging\":\"[\\\"\\u30e2\\u30c7\\u30eb\\\"]\",\"post_result\":\"\\u82b1\\u738bYoutubePR\",\"tw_fw\":\"2010000\",\"tw_url\":\"https:\\/\\/twitter.com\\/yua_mikami\",\"fb_fw\":\"0\",\"fb_url\":\"\",\"yt_fw\":\"419000\",\"yt_url\":\"https:\\/\\/www.youtube.com\\/channel\\/UC0BCfHbNORhd7dsw1R5rw9w\",\"yt_female_ratio\":\"80.00\",\"yt_male_ratio\":\"20.00\",\"tt_fw\":\"2400000\",\"tt_url\":\"https:\\/\\/www.tiktok.com\\/@yua_mikami?lang=ja-JP\",\"blog_url\":\"\",\"blog_fw\":\"0\",\"wear_fw\":\"0\",\"wear_url\":\"\",\"weibo_fw\":\"0\",\"wechat_fw\":\"0\",\"red_fw\":\"0\",\"keyin_fw\":\"0\",\"threesize\":\"0\",\"sns_url\":\"\",\"bank_name\":\"\\u4e09\\u4e95\\u4f4f\\u53cb\\u9280\\u884c\",\"branch_name\":\"\\u65b0\\u5bbf\",\"note\":\"\\u30a2\\u30c0\\u30eb\\u30c8\\r\\n\\u30bb\\u30af\\u30b7\\u30fc\\u5973\\u512a\",\"acq_record\":\"\\u30a4\\u30f3\\u30b9\\u30bf\\u30b0\\u30e9\\u30e01\\u6295\\u7a3f\\u30b3\\u30b9\\u30e1100\\u4ef6         \"}'),
(2, ' 2 明日花キララ test@test 2     1988-10-02     2366000 https://www.instagram.com/asukakiraran/    39.00 61.00 32 東京 芸能/グラビア/女優   明日花キララ 2.88       245000 https://www.youtube.com/channel/UCBI_tQeLqKZPTCrKbsGhJoQ                     []', '{\"id\":\"2\",\"name\":\"\\u660e\\u65e5\\u82b1\\u30ad\\u30e9\\u30e9\",\"email\":\"test@test\",\"gender\":\"2\",\"post\":\"\",\"tel_number\":\"\",\"account_kana\":\"\",\"zip_code\":\"\",\"birthday\":\"1988-10-02\",\"account_type\":\"\",\"province\":\"\",\"district_num\":\"\",\"building_name\":\"\",\"it_fw\":\"2366000\",\"it_url\":\"https:\\/\\/www.instagram.com\\/asukakiraran\\/\",\"amount\":\"\",\"charge_name\":\"\",\"account_number\":\"\",\"it_male_ratio\":\"39.00\",\"it_female_ratio\":\"61.00\",\"age\":\"32\",\"activity_base\":\"\\u6771\\u4eac\",\"genre\":\"\\u82b8\\u80fd\\/\\u30b0\\u30e9\\u30d3\\u30a2\\/\\u5973\\u512a\",\"line_id\":\"\",\"pr_point\":\"\",\"profile_name\":\"\\u660e\\u65e5\\u82b1\\u30ad\\u30e9\\u30e9\",\"eg_rate\":\"2.88\",\"app_post\":\"\",\"post_result\":\"\",\"tw_fw\":\"\",\"tw_url\":\"\",\"fb_fw\":\"\",\"fb_url\":\"\",\"yt_fw\":\"245000\",\"yt_url\":\"https:\\/\\/www.youtube.com\\/channel\\/UCBI_tQeLqKZPTCrKbsGhJoQ\",\"yt_female_ratio\":\"\",\"yt_male_ratio\":\"\",\"tt_fw\":\"\",\"tt_url\":\"\",\"blog_url\":\"\",\"blog_fw\":\"\",\"wear_fw\":\"\",\"wear_url\":\"\",\"weibo_fw\":\"\",\"wechat_fw\":\"\",\"red_fw\":\"\",\"keyin_fw\":\"\",\"threesize\":\"\",\"sns_url\":\"\",\"bank_name\":\"\",\"branch_name\":\"\",\"note\":\"\",\"acq_record\":\"  \",\"belonging\":\"[]\"}'),
(3, 'A 000003 テリテリ 1740000 https://www.instagram.com/taeri__taeri/ 12.00, 88.00, 30, インフルエンサー セルフィー 2, 4.58, テリテリ 1991-07-08 ', '{\"id\": 3,\"name\": \"テリテリ\",\"user_id\": 3,\"nick_name\": null,\"other_name\": null,\"address\": null,\"profile_name\": \"テリテリ\",\"email\": null,\"mobile\": null,\"post_code\": null,\"birthday\": \"8/7/1991\",\"account_type\": null,\"city_address\": null,\"building_address\": null,\"pertecture\": null,\"fw_count\": 1740000,\"it_url\": \"https://www.instagram.com/taeri__taeri/\",\"request_amount\": null,\"note\": null,\"igfw_male_ratio\": 12,\"igfw_female_ratio\": 88,\"age\": 30,\"activity_base\": null,\"talent\": null,\"belonging\": \"インフルエンサー\",\"post_genre\": \"セルフィー\",\"acq_record\": null,\"pr_point\": null,\"gender\": 2,\"fg_rate\": 4.579999923706055,\"app_post\": null,\"post_result\": null,\"tw_fw\": null,\"tw_url\": null,\"fb_fw\": null,\"fb_url\": null,\"yt_registrant\": null,\"yt_channel_url\": null,\"female_ratio\": null,\"male_ratio\": null,\"age_range\": null,\"tt_fw\": null,\"tt_url\": null,\"blog_url\": null,\"blog_fw_count\": null,\"wear_fw_count\": null,\"wear_url\": null,\"sns_url\": null,\"bank_name\": null,\"branch_name\": null,\"account_number\": null,\"line_id\": null,\"image\": \"3.jpg\",\"created_at\": null,\"yt_fw\": null,\"it_fw\": null}'),
(4, 'S 000004 近藤千尋 1610000 https://www.instagram.com/chipichan.1215/ Twitter1投稿90万~\\r\\n Youtube100万~ 13.00, 87.00, 31 東京 モデル、タレント 芸能 2, 3.01, エイジア 757000 https://twitter.com/chipi1215 4_tw.jfif 近藤千尋 1989-12-15 ', '{\"id\": 4,\"name\": \"近藤千尋\",\"user_id\": 4,\"nick_name\": null,\"other_name\": null,\"address\": null,\"profile_name\": \"近藤千尋\",\"email\": null,\"mobile\": null,\"post_code\": null,\"birthday\": \"15/12/1989\",\"account_type\": null,\"city_address\": null,\"building_address\": null,\"pertecture\": null,\"fw_count\": 1610000,\"it_url\": \"https://www.instagram.com/chipichan.1215/\",\"request_amount\": \"Twitter1投稿90万~\\r\\n Youtube100万~\",\"note\": null,\"igfw_male_ratio\": 13,\"igfw_female_ratio\": 87,\"age\": 31,\"activity_base\": \"東京\",\"talent\": null,\"belonging\": \"モデル、タレント\",\"post_genre\": \"芸能\",\"acq_record\": null,\"pr_point\": null,\"gender\": 2,\"fg_rate\": 3.009999990463257,\"app_post\": \"エイジア\",\"post_result\": null,\"tw_fw\": 757000,\"tw_url\": \"https://twitter.com/chipi1215\",\"fb_fw\": null,\"fb_url\": null,\"yt_registrant\": null,\"yt_channel_url\": null,\"female_ratio\": null,\"male_ratio\": null,\"age_range\": null,\"tt_fw\": null,\"tt_url\": null,\"blog_url\": null,\"blog_fw_count\": null,\"wear_fw_count\": null,\"wear_url\": null,\"sns_url\": null,\"bank_name\": null,\"branch_name\": null,\"account_number\": null,\"line_id\": null,\"image\": \"4.jfif\",\"created_at\": null,\"yt_fw\": null,\"it_fw\": null}'),
(5, 'S 000005 紗栄子 1606000 https://www.instagram.com/saekoofficial/?hl=ja AVEX経由で190から200 18.00, 85.00, 34 東京 モデル、タレント 芸能、ブロガー 2, 1.36, 久留島 301000 https://ameblo.jp/saeko-doll 紗栄子 1986-11-16 ', '{\"id\": 5,\"name\": \"紗栄子\",\"user_id\": 5,\"nick_name\": null,\"other_name\": null,\"address\": null,\"profile_name\": \"紗栄子\",\"email\": null,\"mobile\": null,\"post_code\": null,\"birthday\": \"16/11/1986\",\"account_type\": null,\"city_address\": null,\"building_address\": null,\"pertecture\": null,\"fw_count\": 1606000,\"it_url\": \"https://www.instagram.com/saekoofficial/?hl=ja\",\"request_amount\": null,\"note\": \"AVEX経由で190から200\",\"igfw_male_ratio\": 18,\"igfw_female_ratio\": 85,\"age\": 34,\"activity_base\": \"東京\",\"talent\": null,\"belonging\": \"モデル、タレント\",\"post_genre\": \"芸能、ブロガー\",\"acq_record\": null,\"pr_point\": null,\"gender\": 2,\"fg_rate\": 1.3600000143051148,\"app_post\": null,\"post_result\": null,\"tw_fw\": null,\"tw_url\": null,\"fb_fw\": null,\"fb_url\": null,\"yt_registrant\": null,\"yt_channel_url\": null,\"female_ratio\": null,\"male_ratio\": null,\"age_range\": null,\"tt_fw\": null,\"tt_url\": null,\"blog_url\": \"https://ameblo.jp/saeko-doll\",\"blog_fw_count\": \"301000\",\"wear_fw_count\": null,\"wear_url\": null,\"sns_url\": null,\"bank_name\": null,\"branch_name\": null,\"account_number\": null,\"line_id\": null,\"image\": \"5.jpg\",\"created_at\": null,\"yt_fw\": null,\"it_fw\": null}'),
(6, 'S 000006 ぺこ 1553000 https://www.instagram.com/pecotecooo/ スターレイ担当者とやり取り 8.00, 92.00, 26 東京 タレント・ママ 芸能 2, 1.36, 永井 スターレイ 951903 https://twitter.com/pecotecooo 6_tw.jfif ぺこ 1995-06-03 ', '{\"id\": 6,\"name\": \"ぺこ\",\"user_id\": 6,\"nick_name\": null,\"other_name\": null,\"address\": null,\"profile_name\": \"ぺこ\",\"email\": null,\"mobile\": null,\"post_code\": null,\"birthday\": \"3/6/1995\",\"account_type\": null,\"city_address\": null,\"building_address\": null,\"pertecture\": null,\"fw_count\": 1553000,\"it_url\": \"https://www.instagram.com/pecotecooo/\",\"request_amount\": null,\"note\": \"スターレイ担当者とやり取り\",\"igfw_male_ratio\": 8,\"igfw_female_ratio\": 92,\"age\": 26,\"activity_base\": \"東京\",\"talent\": null,\"belonging\": \"タレント・ママ\",\"post_genre\": \"芸能\",\"acq_record\": null,\"pr_point\": null,\"gender\": 2,\"fg_rate\": 1.3600000143051148,\"app_post\": \"スターレイ\",\"post_result\": null,\"tw_fw\": 951903,\"tw_url\": \"https://twitter.com/pecotecooo\",\"fb_fw\": null,\"fb_url\": null,\"yt_registrant\": null,\"yt_channel_url\": null,\"female_ratio\": null,\"male_ratio\": null,\"age_range\": null,\"tt_fw\": null,\"tt_url\": null,\"blog_url\": null,\"blog_fw_count\": null,\"wear_fw_count\": null,\"wear_url\": null,\"sns_url\": null,\"bank_name\": null,\"branch_name\": null,\"account_number\": null,\"line_id\": null,\"image\": \"6.jfif\",\"created_at\": null,\"yt_fw\": null,\"it_fw\": null}'),
(7, 'S 000007 谷まりあ 1550000 https://www.instagram.com/mariaaaa728/?hl=ja スターレイプロダクション経由 17.00, 83.00, 26 東京 タレント、モデル 芸能 2, 2.34, 永井 スターレイ 谷まりあ 1995-07-28 ', '{\"id\": 7,\"name\": \"谷まりあ\",\"user_id\": 7,\"nick_name\": null,\"other_name\": null,\"address\": null,\"profile_name\": \"谷まりあ\",\"email\": null,\"mobile\": null,\"post_code\": null,\"birthday\": \"28/7/1995\",\"account_type\": null,\"city_address\": null,\"building_address\": null,\"pertecture\": null,\"fw_count\": 1550000,\"it_url\": \"https://www.instagram.com/mariaaaa728/?hl=ja\",\"request_amount\": null,\"note\": \"スターレイプロダクション経由\",\"igfw_male_ratio\": 17,\"igfw_female_ratio\": 83,\"age\": 26,\"activity_base\": \"東京\",\"talent\": null,\"belonging\": \"タレント、モデル\",\"post_genre\": \"芸能\",\"acq_record\": null,\"pr_point\": null,\"gender\": 2,\"fg_rate\": 2.3399999141693117,\"app_post\": \"スターレイ\",\"post_result\": null,\"tw_fw\": null,\"tw_url\": null,\"fb_fw\": null,\"fb_url\": null,\"yt_registrant\": null,\"yt_channel_url\": null,\"female_ratio\": null,\"male_ratio\": null,\"age_range\": null,\"tt_fw\": null,\"tt_url\": null,\"blog_url\": null,\"blog_fw_count\": null,\"wear_fw_count\": null,\"wear_url\": null,\"sns_url\": null,\"bank_name\": null,\"branch_name\": null,\"account_number\": null,\"line_id\": null,\"image\": \"7.jpeg\",\"created_at\": null,\"yt_fw\": null,\"it_fw\": null}'),
(8, 'S 000008 辻希美 1326000 https://www.instagram.com/tsujinozomi_official/?hl=ja YouTube1本：500万円\\r\\n二次利用（サイトへの動画埋め込み）80万円/1クール\\r\\nInstagram:フィード85万(写真3枚) 12.00, 88.00, 34 東京 2, 2.73, アップフロントクリエイト\\r\\n（YouTubeのみMIHA） タカラトミーワンダービューシアター案件 655000 https://www.youtube.com/channel/UCNiurMpWExWgio2lqldycbA 8_yt.jfif 辻希美 1987-06-17 ', '{\"id\": 8,\"name\": \"辻希美\",\"user_id\": 8,\"nick_name\": null,\"other_name\": null,\"address\": null,\"profile_name\": \"辻希美\",\"email\": null,\"mobile\": null,\"post_code\": null,\"birthday\": \"17/6/1987\",\"account_type\": null,\"city_address\": null,\"building_address\": null,\"pertecture\": null,\"fw_count\": 1326000,\"it_url\": \"https://www.instagram.com/tsujinozomi_official/?hl=ja\",\"request_amount\": \"YouTube1本：500万円\\r\\n二次利用（サイトへの動画埋め込み）80万円/1クール\\r\\nInstagram:フィード85万(写真3枚)\",\"note\": null,\"igfw_male_ratio\": 12,\"igfw_female_ratio\": 88,\"age\": 34,\"activity_base\": \"東京\",\"talent\": null,\"belonging\": null,\"post_genre\": null,\"acq_record\": null,\"pr_point\": null,\"gender\": 2,\"fg_rate\": 2.7300000190734865,\"app_post\": \"\\\"アップフロントクリエイト\\n（YouTubeのみMIHA）\\\"\",\"post_result\": \"タカラトミーワンダービューシアター案件\",\"tw_fw\": null,\"tw_url\": null,\"fb_fw\": null,\"fb_url\": null,\"yt_registrant\": 655000,\"yt_channel_url\": \"https://www.youtube.com/channel/UCNiurMpWExWgio2lqldycbA\",\"female_ratio\": null,\"male_ratio\": null,\"age_range\": null,\"tt_fw\": null,\"tt_url\": null,\"blog_url\": null,\"blog_fw_count\": null,\"wear_fw_count\": null,\"wear_url\": null,\"sns_url\": null,\"bank_name\": null,\"branch_name\": null,\"account_number\": null,\"line_id\": null,\"image\": \"8.jfif\",\"created_at\": null,\"yt_fw\": null,\"it_fw\": null}'),
(9, 'C 000009 清水あいり 1200000 https://www.instagram.com/shimizuairi/ ヴィズミック担当者とやり取り 82.00, 18.00, 28 東京 タレント 芸能 2, 3.22, 永井 TRUSTAR 清水あいり 1992-12-17 ', '{\"id\": 9,\"name\": \"清水あいり\",\"user_id\": 9,\"nick_name\": null,\"other_name\": null,\"address\": null,\"profile_name\": \"清水あいり\",\"email\": null,\"mobile\": null,\"post_code\": null,\"birthday\": \"17/12/1992\",\"account_type\": null,\"city_address\": null,\"building_address\": null,\"pertecture\": null,\"fw_count\": 1200000,\"it_url\": \"https://www.instagram.com/shimizuairi/\",\"request_amount\": null,\"note\": \"ヴィズミック担当者とやり取り\",\"igfw_male_ratio\": 82,\"igfw_female_ratio\": 18,\"age\": 28,\"activity_base\": \"東京\",\"talent\": null,\"belonging\": \"タレント\",\"post_genre\": \"芸能\",\"acq_record\": null,\"pr_point\": null,\"gender\": 2,\"fg_rate\": 3.2200000286102297,\"app_post\": \"TRUSTAR\",\"post_result\": null,\"tw_fw\": null,\"tw_url\": null,\"fb_fw\": null,\"fb_url\": null,\"yt_registrant\": null,\"yt_channel_url\": null,\"female_ratio\": null,\"male_ratio\": null,\"age_range\": null,\"tt_fw\": null,\"tt_url\": null,\"blog_url\": null,\"blog_fw_count\": null,\"wear_fw_count\": null,\"wear_url\": null,\"sns_url\": null,\"bank_name\": null,\"branch_name\": null,\"account_number\": null,\"line_id\": null,\"image\": \"9.jpg\",\"created_at\": null,\"yt_fw\": null,\"it_fw\": null}'),
(20, 'S 000020 ゆきぽよ 815000 https://www.instagram.com/poyo_ngy/ 74.00, 26.00, 24 東京 タレント/モデル 芸能 2, 久留島 91900 https://twitter.com/poyo_ngy 20_tw.jfif 344000 https://www.youtube.com/channel/UC6TRiVRGcAyIqyKgVmSz9oQ 20_yt.jfif 1996-10-23 ', NULL),
(21, 'S 000021 高橋愛 796000 https://www.instagram.com/i_am_takahashi/ 91.00, 9.00, 34 東京 タレント、モデル 芸能 2, デルタパートナーズ 316000 https://twitter.com/takahashi__ai 21_tw.jfif https://ameblo.jp/takahashiai-blog/ 1986-09-14 ', NULL),
(22, 'A 000022 ふくれな 795000 https://www.instagram.com/fukurena/?hl=ja アップフロントクリエイト経由 83.00, 17.00, 21 東京 Youtuber カラフル、原宿、ファッション、アパレル、youtuber 2, 永井 12000 https://twitter.com/fukurena0924 22_tw.jfif 1560000 https://www.youtube.com/channel/UCCuizDTLsr-mNm_PEGdChVg 22_yt.jfif 1999-09-24 y-yoshikawa@guild-inc.tokyo(担当：吉川様) ', NULL),
(23, 'S 000023 平野ノラ 787000 https://www.instagram.com/noranoranora1988/ 1投稿60（時期により変動）、二次使用不可 77.00, 23.00, 42, ママ、芸人 2, 永井 ギルド 594000, 1978-10-20 wepr@watanabe-ent.com ', NULL),
(25, 'A 000025 島袋聖南 784000 https://www.instagram.com/seina4444/ ▼LIVE配信費用 87.00, 13.00, 34 東京 タレント、モデル 芸能 2, 浜辺 1556000, 29000 （バズレシピ　金谷様） 1987-04-04 ', NULL),
(26, 'B 000026 長澤茉里奈 775000 https://www.instagram.com/marinanagasawa1008/ YouTubeLive配信または動画投稿（撮影はリュウジさんサイドのスタッフ）：280万円 ※契約書期限：2022年4月22日まで 32.00, 68.00, 25 東京 タレント 芸能 2, 永井 242000, 島袋聖南 1995-10-08 ', NULL),
(10, 'S 000010 鈴木えみ 1180000 https://www.instagram.com/emisuzuki_official/ 広告担当の方にメール 85.00, 15.00, 35 東京 モデル 芸能 2, スターダスト 鈴木えみ 1985-09-13 ', NULL),
(11, 'A 000011 あやなん 1013000 https://www.instagram.com/ayachan_0619/ Instagramフィード1投稿100万円、ストーリー投稿1投稿50万円、TikTok100万円、Twitter50万円、Youtube200万円 炎上中 86.00, 14.00, 28 東京 ママ、YouTuber ファミリー、バラエティ ○ インスタグラム1投稿コスメ100件 夫婦で有名 2, ○ 柿沼 UUUM 花王YoutubePR 1121000 https://twitter.com/ayachan0619 11_tw.jfif 2370000 https://www.youtube.com/channel/UColoXxvhfz54o0icqQRPzYw 11_yt.jfif 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 1000000 https://www.tiktok.com/@ayachan0619?lang=ja-JP 80.00, 20.00, 000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 あやなん 三井住友銀行 新宿 普通 0 ayanan 髙橋あやな 1993-06-19 shibanan.channel@gmail.com（担当：立川様） 123456 0000-00-00', NULL),
(12, 'S 000012 重盛さと美 1002000 https://www.instagram.com/satomi_shigemori/?hl=ja 敏感肌の為、美容品はハードルが高い 92.00, 8.00, 32 東京 タレント 芸能 2, 久留島 6000 https://www.youtube.com/channel/UCME18URl_IsSr1pVLHmuejA 12_yt.jfif 1988-09-04 kataoka@avilla.jp(担当：片岡さん) ', NULL),
(13, 'S 000013 板野友美 1000000 https://www.instagram.com/tomo.i_0703/ youtube:200万円/税抜、Instagramフィード1投稿2,050,000円/税抜、1,054,000円/税抜、Twitter:RT3,100,000円/税抜、通常ツイート・引用リツイート4,200,000円/税抜※2021/6 （現在ストーリーのみ引き受け（金額は基本fw*1円だが交渉可）） 73.00, 27.00, 29 東京 アイドル、モデル 芸能 元AKB48 2, ホリプロ/キングレコード 154000 https://www.youtube.com/channel/UCDLqvTPnN70jKZNqaDF4GwQ?sub_confirmation=1 13_yt.jfif 65.00, 35.00, 4.00, 44.00, 35.00, 10.00, 1991-07-03 ', NULL),
(14, 'S 000014 宇野実彩子 987000 https://www.instagram.com/misako_uno_aaa/ インサイト提出不可 82.00, 18.00, 35 東京 タレント、歌手、女優 芸能 AVEX経由で100~120 2, 久留島 1349486 https://twitter.com/uno_uno_0716 14_tw.jfif 1986-07-16 ', NULL),
(15, 'S 000015 ゆりやんレトリィバァ 970000 https://www.instagram.com/yuriyan.retriever/ YouTube動画1本：120万円〜 83.00, 17.00, 30, 芸人 芸能、トレーニング 2, 齋藤 よしもと https://twitter.com/notinu 15_tw.jfif 105000 https://www.youtube.com/channel/UCDvEytlGb_DYqYoZukE75Lg/ 15_yt.jfif 1990-11-01 ', NULL),
(16, 'A 000016 古川優香（炎上中2021/12~） 915000 https://www.instagram.com/iamyukaf/?hl=ja 92.00, 8.00, 24 東京、大阪 youtuber、読モ ファッション 153cm 2, YouTube：ZESS 146000 https://twitter.com/FURUKAWAYUKA_ 16_tw.jfif 748000 https://www.youtube.com/channel/UCm-m76oSXXj41CUxDwUeF4Q 16_yt.jfif 1997-01-15 tomoyama0130@gmail.com（担当：巴山さん） ', NULL),
(17, 'A 000017 Maya 898000 https://www.instagram.com/mayaaa_124/ 脱毛系競合※2021/6 86.00, 14.00, 17, モデル、ママ 自撮り、子育て、美容 今日好き出演 2, ○ 久留島 ガルー 923000, 335000 https://www.youtube.com/channel/UCa_uTzJrKInoqNZV5IvRjkQ 17_yt.jfif 1100000 https://www.tiktok.com/@MS4wLjABAAAACI0pwg8LarKEQhQpJVvT-tosGzWQypdOvxBKoMKmtbI?lang=ja-JP 2004-01-24 kimonogirls.model@gmail.com（担当：今村さん） ', NULL),
(18, 'S 000018 megbaby 828000 https://www.instagram.com/_megbaby_/?hl=ja 83.00, 17.00, 38 東京 モデル 芸能 DMエイジアプロモーション富田経由 2, kimonogirls https://twitter.com/megbaby_offi 18_tw.jfif 1900 1982-11-03 ', NULL),
(19, 'S 000019 Niki 818000 https://www.instagram.com/__niki22/?hl=ja 82.00, 18.00, 24 東京 タレント、モデル 芸能 avex経由60 2, 久留島 35600 https://twitter.com/i__am_niki 19_tw.jfif 1996-10-15 ', NULL),
(27, 'A 000027 まあたそ 735000 https://www.instagram.com/5m91r/?hl=ja インスタライブ（撮影は本人のスマートフォンをお借りして弊社が行う）：120万円 82.00, 18.00, 25, 2, 永井 TRUSTAR 1930000 https://www.youtube.com/channel/UCxlsYyeri8MOpap3w3JbWSQ 27_yt.jfif 1995-09-01 ', NULL),
(28, ' 000028 愛沢えみり 729000 https://www.instagram.com/emiri_aizawa/ ヴィズミック担当者とやり取り 87.00, 13.00, 32 東京 元キャバ嬢 元キャバ嬢 2, https://twitter.com/emirio9o1 28_tw.jfif 334000 https://www.youtube.com/channel/UClP8QHtFXrjXQfasbj2Hp-Q 28_yt.jfif 1988-09-01 ', NULL),
(29, ' 29 なえなの test@test 2          721000 https://www.instagram.com/naenano0114/  小池  61.00 39.00 0 東京 YouTuber   なえなの    248000    612000 https://www.youtube.com/channel/UCRPGvS02AnqD1qZrZOdRY4g/                      []', '{\"id\":\"29\",\"name\":\"\\u306a\\u3048\\u306a\\u306e\",\"email\":\"test@test\",\"gender\":\"2\",\"post\":\"\",\"tel_number\":\"\",\"account_kana\":\"\",\"zip_code\":\"\",\"birthday\":\"\",\"account_type\":\"\",\"province\":\"\",\"district_num\":\"\",\"building_name\":\"\",\"it_fw\":\"721000\",\"it_url\":\"https:\\/\\/www.instagram.com\\/naenano0114\\/\",\"amount\":\"\",\"charge_name\":\"\\u5c0f\\u6c60\",\"account_number\":\"\",\"it_male_ratio\":\"61.00\",\"it_female_ratio\":\"39.00\",\"age\":\"0\",\"activity_base\":\"\\u6771\\u4eac\",\"genre\":\"YouTuber\",\"line_id\":\"\",\"pr_point\":\"\",\"profile_name\":\"\\u306a\\u3048\\u306a\\u306e\",\"eg_rate\":\"\",\"app_post\":\"\",\"post_result\":\"\",\"tw_fw\":\"248000\",\"tw_url\":\"\",\"fb_fw\":\"\",\"fb_url\":\"\",\"yt_fw\":\"612000\",\"yt_url\":\"https:\\/\\/www.youtube.com\\/channel\\/UCRPGvS02AnqD1qZrZOdRY4g\\/\",\"yt_female_ratio\":\"\",\"yt_male_ratio\":\"\",\"tt_fw\":\"\",\"tt_url\":\"\",\"blog_url\":\"\",\"blog_fw\":\"\",\"wear_fw\":\"\",\"wear_url\":\"\",\"weibo_fw\":\"\",\"wechat_fw\":\"\",\"red_fw\":\"\",\"keyin_fw\":\"\",\"threesize\":\"\",\"sns_url\":\"\",\"bank_name\":\"\",\"branch_name\":\"\",\"note\":\" \",\"acq_record\":\"  \",\"belonging\":\"[]\"}'),
(24, 'A 000024 リュウジ＠料理のお兄さん（依頼時注意） 784000 https://www.instagram.com/ryuji_foodlabo/?hl=ja ▼キャスティング+フィード2投稿：150万円 86.00, 14.00, 35 東京、千葉 料理研究家 グルメ、料理 ○ 1, 柿沼 ワタナベエンターテインメント https://twitter.com/ore825?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor 24_tw.jfif 1680000 https://www.youtube.com/c/%E3%83%AA%E3%83%A5%E3%82%A6%E3%82%B8%E3%81%AE%E3%83%90%E3%82%BA%E3%83%AC%E3%82%B7%E3%83%94/ 24_yt.jfif 070-3662-1129 菅澤竜士 1986-05-02 bazurecipe@gmail.com ', NULL),
(192, ' 000001 テスト 10,000 yua_mikami Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿) アダルト 64％ 36％ 28 東京 タレント YouTuber ◯ インスタグラム1投稿コスメ100件 元AKB 女性 2.52％ ◯ 小池 YouTube:AnyMind 花王YoutubePR 2,010,000 https://twitter.com/yua_mikami   419,000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00% 20.00% 10.0% 20.00% 40.00% 10.00% 10.00% 5.00% 5.00% 2,400,000 https://www.tiktok.com/@yua_mikami?lang=ja-JP      000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 三上悠亜 三井住友銀行 新宿 普通 0000000 mkamiyua 三上悠亜 1993/6/19 shibanan.channel@gmail.com（担当：立川様） 123456 2021/08/05', NULL),
(193, ' 193 髙橋あんり shibanan.channel@gmail.com 2 三上悠亜 000-0000-0000 mkamiyua 000-0000 1996-06-04 普通 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 10 yua_mikami  小池 0000000 64.00 36.00 28 東京 美容 123456  テスト2 2.52  花王YoutubePR 2 https://twitter.com/yua_mikami 10 https://twitter.com/yua_mikami 419 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00 20.00 2 https://www.tiktok.com/@yua_mikami?lang=ja-JP https://twitter.com/yua_mikami 10 100000 https://twitter.com/yua_mikami      https://twitter.com/yua_mikami 三井住友銀行 新宿  テスト  インスタグラム1投稿コスメ100件  []', '{\"id\":\"193\",\"name\":\"\\u9ad9\\u6a4b\\u3042\\u3093\\u308a\",\"email\":\"shibanan.channel@gmail.com\",\"gender\":\"2\",\"post\":\"\\u4e09\\u4e0a\\u60a0\\u4e9c\",\"tel_number\":\"000-0000-0000\",\"account_kana\":\"mkamiyua\",\"zip_code\":\"000-0000\",\"birthday\":\"1996-06-04\",\"account_type\":\"\\u666e\\u901a\",\"province\":\"\\u6771\\u4eac\\u90fd\",\"district_num\":\"\\u65b0\\u5bbf\\u533a\\u539f\\u753a3-37-1\",\"building_name\":\"\\u30cf\\u30fc\\u30e2\\u30cb\\u30fc\\u30ec\\u30b8\\u30c7\\u30f3\\u30b9\\u65e9\\u7a32\\u7530\\u590f\\u76ee\\u5742901\",\"it_fw\":\"10\",\"it_url\":\"yua_mikami\",\"amount\":\"\",\"charge_name\":\"\\u5c0f\\u6c60\",\"account_number\":\"0000000\",\"it_male_ratio\":\"64.00\",\"it_female_ratio\":\"36.00\",\"age\":\"28\",\"activity_base\":\"\\u6771\\u4eac\",\"genre\":\"\\u7f8e\\u5bb9\",\"line_id\":\"123456\",\"pr_point\":\"\",\"profile_name\":\"\\u30c6\\u30b9\\u30c82\",\"eg_rate\":\"2.52\",\"app_post\":\"\",\"post_result\":\"\\u82b1\\u738bYoutubePR\",\"tw_fw\":\"2\",\"tw_url\":\"https:\\/\\/twitter.com\\/yua_mikami\",\"fb_fw\":\"10\",\"fb_url\":\"https:\\/\\/twitter.com\\/yua_mikami\",\"yt_fw\":\"419\",\"yt_url\":\"https:\\/\\/www.youtube.com\\/channel\\/UC0BCfHbNORhd7dsw1R5rw9w\",\"yt_female_ratio\":\"80.00\",\"yt_male_ratio\":\"20.00\",\"tt_fw\":\"2\",\"tt_url\":\"https:\\/\\/www.tiktok.com\\/@yua_mikami?lang=ja-JP\",\"blog_url\":\"https:\\/\\/twitter.com\\/yua_mikami\",\"blog_fw\":\"10\",\"wear_fw\":\"100000\",\"wear_url\":\"https:\\/\\/twitter.com\\/yua_mikami\",\"weibo_fw\":\"\",\"wechat_fw\":\"\",\"red_fw\":\"\",\"keyin_fw\":\"\",\"threesize\":\"\",\"sns_url\":\"https:\\/\\/twitter.com\\/yua_mikami\",\"bank_name\":\"\\u4e09\\u4e95\\u4f4f\\u53cb\\u9280\\u884c\",\"branch_name\":\"\\u65b0\\u5bbf\",\"note\":\" \\u30c6\\u30b9\\u30c8\",\"acq_record\":\" \\u30a4\\u30f3\\u30b9\\u30bf\\u30b0\\u30e9\\u30e01\\u6295\\u7a3f\\u30b3\\u30b9\\u30e1100\\u4ef6 \",\"belonging\":\"[]\"}'),
(194, ' 000001 テスト2 10,000 yua_mikami Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿) テスト 64％ 36％ 28 東京 タレント YouTuber ◯ インスタグラム1投稿コスメ100件 元AKB 女性 2.52％ ◯ 小池 YouTube:AnyMind 花王YoutubePR 2,010,000 https://twitter.com/yua_mikami 10,000 https://twitter.com/yua_mikami 419,000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00% 20.00% 10.0% 20.00% 40.00% 10.00% 10.00% 5.00% 5.00% 2,400,000 https://www.tiktok.com/@yua_mikami?lang=ja-JP 10,000 https://twitter.com/yua_mikami 100000 https://twitter.com/yua_mikami https://twitter.com/yua_mikami 000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 三上悠亜 三井住友銀行 新宿 普通 0000000 mkamiyua まきようこ 1993/6/19 shibanan.channel@gmail.com（担当：立川様） 123456 2021/08/05', NULL),
(195, ' 000001 テスト2 10,000 yua_mikami Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿) テスト 64％ 36％ 28 東京 タレント YouTuber ◯ インスタグラム1投稿コスメ100件 元AKB 女性 2.52％ ◯ 小池 YouTube:AnyMind 花王YoutubePR 2,010,000 https://twitter.com/yua_mikami 10,000 https://twitter.com/yua_mikami 419,000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00% 20.00% 10.0% 20.00% 40.00% 10.00% 10.00% 5.00% 5.00% 2,400,000 https://www.tiktok.com/@yua_mikami?lang=ja-JP 10,000 https://twitter.com/yua_mikami 100000 https://twitter.com/yua_mikami https://twitter.com/yua_mikami 000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 三上悠亜 三井住友銀行 新宿 普通 0000000 mkamiyua まきようこ 1993/6/19 shibanan.channel@gmail.com（担当：立川様） 123456 2021/08/05 000001 テスト2 10,000 yua_mikami Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿) テスト 64％ 36％ 28 東京 タレント YouTuber ◯ インスタグラム1投稿コスメ100件 元AKB 女性 2.52％ ◯ 小池 YouTube:AnyMind 花王YoutubePR 2,010,000 https://twitter.com/yua_mikami 10,000 https://twitter.com/yua_mikami 419,000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00% 20.00% 10.0% 20.00% 40.00% 10.00% 10.00% 5.00% 5.00% 2,400,000 https://www.tiktok.com/@yua_mikami?lang=ja-JP 10,000 https://twitter.com/yua_mikami 100000 https://twitter.com/yua_mikami https://twitter.com/yua_mikami 000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 三上悠亜 三井住友銀行 新宿 普通 0000000 mkamiyua 竹脇まりな 1993/6/19 shibanan.channel@gmail.com（担当：立川様） 123456 2021/08/05', NULL),
(196, ' 000001 テスト2 10,000 yua_mikami Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿) テスト 64％ 36％ 28 東京 タレント YouTuber ◯ インスタグラム1投稿コスメ100件 元AKB 女性 2.52％ ◯ 小池 YouTube:AnyMind 花王YoutubePR 2,010,000 https://twitter.com/yua_mikami 10,000 https://twitter.com/yua_mikami 419,000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00% 20.00% 10.0% 20.00% 40.00% 10.00% 10.00% 5.00% 5.00% 2,400,000 https://www.tiktok.com/@yua_mikami?lang=ja-JP 10,000 https://twitter.com/yua_mikami 100000 https://twitter.com/yua_mikami https://twitter.com/yua_mikami 000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 三上悠亜 三井住友銀行 新宿 普通 0000000 mkamiyua まきようこ 1993/6/19 shibanan.channel@gmail.com（担当：立川様） 123456 2021/08/05 000001 テスト2 10,000 yua_mikami Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿) テスト 64％ 36％ 28 東京 タレント YouTuber ◯ インスタグラム1投稿コスメ100件 元AKB 女性 2.52％ ◯ 小池 YouTube:AnyMind 花王YoutubePR 2,010,000 https://twitter.com/yua_mikami 10,000 https://twitter.com/yua_mikami 419,000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00% 20.00% 10.0% 20.00% 40.00% 10.00% 10.00% 5.00% 5.00% 2,400,000 https://www.tiktok.com/@yua_mikami?lang=ja-JP 10,000 https://twitter.com/yua_mikami 100000 https://twitter.com/yua_mikami https://twitter.com/yua_mikami 000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 三上悠亜 三井住友銀行 新宿 普通 0000000 mkamiyua 竹脇まりな 1993/6/19 shibanan.channel@gmail.com（担当：立川様） 123456 2021/08/05 000001 テスト2 10,000 yua_mikami Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿) テスト 64％ 36％ 28 東京 タレント YouTuber ◯ インスタグラム1投稿コスメ100件 元AKB 女性 2.52％ ◯ 小池 YouTube:AnyMind 花王YoutubePR 2,010,000 https://twitter.com/yua_mikami 10,000 https://twitter.com/yua_mikami 419,000 https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w 80.00% 20.00% 10.0% 20.00% 40.00% 10.00% 10.00% 5.00% 5.00% 2,400,000 https://www.tiktok.com/@yua_mikami?lang=ja-JP 10,000 https://twitter.com/yua_mikami 100000 https://twitter.com/yua_mikami https://twitter.com/yua_mikami 000-0000-0000 000-0000 東京都 新宿区原町3-37-1 ハーモニーレジデンス早稲田夏目坂901 三上悠亜 三井住友銀行 新宿 普通 0000000 mkamiyua 伊原葵 1993/6/19 shibanan.channel@gmail.com（担当：立川様） 123456 2021/08/05', NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `favourite`
--

CREATE TABLE `favourite` (
  `id` int(10) UNSIGNED NOT NULL,
  `talent_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

--
-- 테이블의 덤프 데이터 `favourite`
--

INSERT INTO `favourite` (`id`, `talent_id`) VALUES
(7, 2),
(8, 8),
(11, 13),
(12, 4);

-- --------------------------------------------------------

--
-- 테이블 구조 `insite`
--

CREATE TABLE `insite` (
  `id` int(10) UNSIGNED NOT NULL,
  `talent_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `it_img` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `client_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT 'クライアント名',
  `subject_name` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '案件名',
  `genre` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT 'ジャンル',
  `post_type` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '投稿タイプ',
  `post_url` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '投稿URL/動画URL',
  `price` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '依頼金額',
  `post_day` date DEFAULT NULL COMMENT '投稿日',
  `post_fw` int(11) DEFAULT NULL COMMENT '投稿時フォロワー数/フォロワー数/投稿時登録者数',
  `reach_cnt` int(11) DEFAULT NULL COMMENT 'リーチ数',
  `impression` int(11) DEFAULT NULL COMMENT 'インプレッション',
  `reach_rate` int(11) DEFAULT NULL COMMENT 'リーチ率',
  `fa_fw` int(11) DEFAULT NULL COMMENT 'いいね数',
  `comment_cnt` int(11) DEFAULT NULL COMMENT 'コメント数',
  `share_cnt` int(11) DEFAULT NULL COMMENT 'シェア数',
  `fav_cnt` int(11) DEFAULT NULL COMMENT 'お気に入り保存数',
  `eg_rate` int(11) DEFAULT NULL COMMENT 'エンゲージメント率',
  `link_click` int(11) DEFAULT NULL COMMENT 'リンククリック/再生回数',
  `click_rate` int(11) DEFAULT NULL COMMENT 'クリック率',
  `cv` int(11) DEFAULT NULL COMMENT 'CV数',
  `cvr` int(11) DEFAULT NULL COMMENT 'CVR',
  `url` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT 'インサイトURL/ツイートアクティビティURL/アナリティクスデータURL/インサイトURL',
  `eg_total` int(11) DEFAULT NULL COMMENT 'エンゲージメント総数',
  `eg_media` int(11) DEFAULT NULL COMMENT 'メディアへのエンゲージメント',
  `retweet` int(11) DEFAULT NULL COMMENT 'リツイート',
  `reply` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '返信',
  `follow` int(11) DEFAULT NULL COMMENT 'フォロー',
  `detail_click` int(11) DEFAULT NULL COMMENT '詳細のクリック数',
  `hash_click` int(11) DEFAULT NULL COMMENT 'ハッシュタグのクリック数',
  `profile_click` int(11) DEFAULT NULL COMMENT 'プロフィールのクリック数',
  `high_rating_cnt` int(11) DEFAULT NULL COMMENT '高評価数',
  `low_rating_cnt` int(11) DEFAULT NULL COMMENT '低評価数'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

--
-- 테이블의 덤프 데이터 `insite`
--

INSERT INTO `insite` (`id`, `talent_id`, `type`, `it_img`, `name`, `client_name`, `subject_name`, `genre`, `post_type`, `post_url`, `price`, `post_day`, `post_fw`, `reach_cnt`, `impression`, `reach_rate`, `fa_fw`, `comment_cnt`, `share_cnt`, `fav_cnt`, `eg_rate`, `link_click`, `click_rate`, `cv`, `cvr`, `url`, `eg_total`, `eg_media`, `retweet`, `reply`, `follow`, `detail_click`, `hash_click`, `profile_click`, `high_rating_cnt`, `low_rating_cnt`) VALUES
(5, 1, 'Twitter', '1_tw.jfif', '三上悠亜', 'クライアント', '案件', 'ジャンル', NULL, '投稿URL', '2000', '2021-09-10', 1, NULL, 1, 0, 1, NULL, NULL, NULL, 0, 0, NULL, 0, 0, '', 1, 1, 122, '', 0, 0, 1, 0, NULL, NULL),
(7, 1, 'Instagram', '1_tw.jfif', '三上悠亜', 'client_1', 'post', 'genre', '', '2324', '333', '2021-09-11', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 1, 'Youtube', '1_tw.jfif', '三上悠亜', 'client', 'tes', 'tewt', NULL, 'er', 'et', '2021-09-11', 0, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, 0, NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0),
(9, 1, 'TikTok', '1_tw.jfif', '三上悠亜', 'tes', 'tew', 'etw', NULL, 'wt', '453', '2021-09-11', 0, NULL, NULL, NULL, 0, 0, 0, NULL, 0, 0, NULL, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 1, 'Twitter', '1_tw.jfif', '三上悠亜', 'dsa', 'dsf', 'sdf', NULL, 'sfds', 'sfs', '2021-09-11', 0, NULL, 0, 0, 0, NULL, NULL, NULL, 0, 0, NULL, 0, 0, '', 0, 0, 0, '', 0, 0, 0, 0, NULL, NULL),
(11, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(16, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(18, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(19, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(20, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(21, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(22, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(25, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 1, 'Instagram', '1_tw.jfif', '三上悠亜', '株式会社テスト', 'テストマーケティング', '美容', 'フィード', 'https://www.instagram.com/p/CTqqQmThcS3/?utm_source=ig_web_copy_link', '1000000', '2021-09-14', 3160000, 3000000, 4000000, 95, 500000, 100, 100, 1000, 16, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 6, 'Twitter', '6_tw.jfif', 'ぺこ', 'ライオン(テスト)', 'オーラツーミープロモーション', '美容', NULL, 'https://twitter.com/pecotecooo/status/1410876182870913027?s=20', '1000000', '2021-09-15', 892000, NULL, 800000, 90, 20000, NULL, NULL, NULL, 1, 500, NULL, 1000, 0, '', 10000, 5000, 500, '200', 10000, 10000, 500, 500, NULL, NULL),
(32, 193, 'Instagram', NULL, '髙橋あんり', 'テスト', 'テスト', '美容', '', 'test', '1234', '2021-09-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(33, 193, 'Instagram', NULL, '髙橋あんり', 'テスト', 'テスト', '美容', '', 'test', '1234', '2021-09-25', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `talents`
--

CREATE TABLE `talents` (
  `id` int(11) UNSIGNED NOT NULL COMMENT ' ',
  `level` varchar(1) DEFAULT NULL,
  `user_id` varchar(11) DEFAULT NULL,
  `profile_name` varchar(255) DEFAULT NULL,
  `it_fw` int(11) DEFAULT NULL,
  `it_url` varchar(255) DEFAULT NULL,
  `it_img` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `note` longtext DEFAULT NULL,
  `it_male_ratio` decimal(11,2) DEFAULT NULL,
  `it_female_ratio` decimal(11,2) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `activity_base` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `contract` enum('○','△','×') DEFAULT NULL,
  `acq_record` longtext DEFAULT NULL,
  `pr_point` varchar(255) DEFAULT NULL,
  `gender` tinyint(1) DEFAULT 1,
  `eg_rate` decimal(11,2) DEFAULT NULL,
  `app_post` enum('○','×') DEFAULT NULL,
  `charge_name` varchar(255) DEFAULT NULL,
  `belonging` varchar(255) DEFAULT NULL,
  `post_result` varchar(255) DEFAULT NULL,
  `tw_fw` int(11) DEFAULT NULL,
  `tw_url` varchar(255) DEFAULT NULL,
  `tw_img` varchar(255) DEFAULT NULL,
  `fb_fw` int(11) DEFAULT NULL,
  `fb_url` varchar(255) DEFAULT NULL,
  `fb_img` varchar(255) DEFAULT NULL,
  `yt_fw` int(11) DEFAULT NULL,
  `yt_url` varchar(255) DEFAULT NULL,
  `yt_img` varchar(255) DEFAULT NULL,
  `yt_female_ratio` decimal(11,2) DEFAULT NULL,
  `yt_male_ratio` decimal(11,2) DEFAULT NULL,
  `age_13` decimal(11,2) DEFAULT NULL,
  `age_18` decimal(11,2) DEFAULT NULL,
  `age_25` decimal(11,2) DEFAULT NULL,
  `age_35` decimal(11,2) DEFAULT NULL,
  `age_45` decimal(11,2) DEFAULT NULL,
  `age_55` decimal(11,2) DEFAULT NULL,
  `age_65` decimal(11,2) DEFAULT NULL,
  `tt_fw` int(11) DEFAULT NULL,
  `tt_url` varchar(255) DEFAULT NULL,
  `tt_img` varchar(255) DEFAULT NULL,
  `tt_female_rate` decimal(11,2) DEFAULT NULL,
  `tt_male_rate` decimal(11,2) DEFAULT NULL,
  `blog_fw` int(11) DEFAULT NULL,
  `blog_url` varchar(255) DEFAULT NULL,
  `wear_fw` int(11) DEFAULT NULL,
  `wear_url` varchar(255) DEFAULT NULL,
  `sns_url` varchar(255) DEFAULT NULL,
  `weibo_fw` int(11) DEFAULT NULL,
  `wechat_fw` int(11) DEFAULT NULL,
  `red_fw` int(11) DEFAULT NULL,
  `keyin_fw` int(11) DEFAULT NULL,
  `relationship` varchar(255) DEFAULT NULL,
  `threesize` int(11) DEFAULT NULL,
  `tel_number` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `district_num` varchar(255) DEFAULT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `post` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `branch_name` varchar(255) DEFAULT NULL,
  `account_type` varchar(11) DEFAULT NULL,
  `account_number` varchar(11) DEFAULT NULL,
  `account_kana` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `line_id` varchar(255) DEFAULT NULL,
  `timestampp` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 테이블의 덤프 데이터 `talents`
--

INSERT INTO `talents` (`id`, `level`, `user_id`, `profile_name`, `it_fw`, `it_url`, `it_img`, `amount`, `note`, `it_male_ratio`, `it_female_ratio`, `age`, `activity_base`, `occupation`, `genre`, `contract`, `acq_record`, `pr_point`, `gender`, `eg_rate`, `app_post`, `charge_name`, `belonging`, `post_result`, `tw_fw`, `tw_url`, `tw_img`, `fb_fw`, `fb_url`, `fb_img`, `yt_fw`, `yt_url`, `yt_img`, `yt_female_ratio`, `yt_male_ratio`, `age_13`, `age_18`, `age_25`, `age_35`, `age_45`, `age_55`, `age_65`, `tt_fw`, `tt_url`, `tt_img`, `tt_female_rate`, `tt_male_rate`, `blog_fw`, `blog_url`, `wear_fw`, `wear_url`, `sns_url`, `weibo_fw`, `wechat_fw`, `red_fw`, `keyin_fw`, `relationship`, `threesize`, `tel_number`, `zip_code`, `province`, `district_num`, `building_name`, `post`, `bank_name`, `branch_name`, `account_type`, `account_number`, `account_kana`, `name`, `birthday`, `email`, `line_id`, `timestampp`) VALUES
(1, '3', '000001', '三上悠亜', 2764000, 'https://www.instagram.com/yua_mikami/', '1_tw.jfif', '1000000', 'アダルト\r\nセクシー女優', 64.00, 36.00, 28, '東京', 'タレント', 'YouTuber', '○', 'インスタグラム1投稿コスメ100件         ', '', 2, 2.52, '○', '小池', '[\"モデル\"]', '花王YoutubePR', 2010000, 'https://twitter.com/yua_mikami', '1_tw.jfif', 0, '', NULL, 419000, 'https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w', '1_yt.jfif', 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 2400000, 'https://www.tiktok.com/@yua_mikami?lang=ja-JP', NULL, 80.00, 20.00, 0, '', 0, '', '', 0, 0, 0, 0, '応答あり(可能)', 0, '000-0000-0000', '000-0000', '東京都', '新宿区原町3-37-1', 'ハーモニーレジデンス早稲田夏目坂901', 'みかみ', '三井住友銀行', '新宿', '普通', '0000000', '三上', '三上悠亜', '1993-06-19', 'shibanan.channel@gmail.com', '123456', '2021-08-05'),
(2, '2', '000002', '明日花キララ', 2366000, 'https://www.instagram.com/asukakiraran/', NULL, '', '', 39.00, 61.00, 32, '東京', 'AV女優', '芸能/グラビア/女優', NULL, '  ', '', 2, 2.88, '', '', '[]', '', 0, '', NULL, 0, '', NULL, 245000, 'https://www.youtube.com/channel/UCBI_tQeLqKZPTCrKbsGhJoQ', NULL, 0.00, 0.00, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '', NULL, NULL, NULL, 0, '', 0, '', '', 0, 0, 0, 0, NULL, 0, '', '', '', '', '', '', '', '', '', '', '', '明日花キララ', '1988-10-02', 'test@test', '', NULL),
(3, '2', '000003', 'テリテリ', 1740000, 'https://www.instagram.com/taeri__taeri/', NULL, NULL, NULL, 12.00, 88.00, 30, NULL, 'インフルエンサー', 'セルフィー', NULL, NULL, NULL, 2, 4.58, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'テリテリ', '1991-07-08', NULL, NULL, NULL),
(4, '1', '000004', '近藤千尋', 1610000, 'https://www.instagram.com/chipichan.1215/', '4_tw.jfif', 'Twitter1投稿90万~\r\n Youtube100万~', NULL, 13.00, 87.00, 31, '東京', 'モデル、タレント', '芸能', NULL, NULL, NULL, 2, 3.01, NULL, NULL, 'エイジア', NULL, 757000, 'https://twitter.com/chipi1215', '4_tw.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '近藤千尋', '1989-12-15', NULL, NULL, NULL),
(5, '1', '000005', '紗栄子', 1606000, 'https://www.instagram.com/saekoofficial/?hl=ja', NULL, NULL, 'AVEX経由で190から200', 18.00, 85.00, 34, '東京', 'モデル、タレント', '芸能、ブロガー', NULL, NULL, NULL, 2, 1.36, NULL, '久留島', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 301000, 'https://ameblo.jp/saeko-doll', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '紗栄子', '1986-11-16', NULL, NULL, NULL),
(6, '1', '000006', 'ぺこ', 1553000, 'https://www.instagram.com/pecotecooo/', '6_tw.jfif', NULL, 'スターレイ担当者とやり取り', 8.00, 92.00, 26, '東京', 'タレント・ママ', '芸能', NULL, NULL, NULL, 2, 1.36, NULL, '永井', 'スターレイ', NULL, 951903, 'https://twitter.com/pecotecooo', '6_tw.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ぺこ', '1995-06-03', NULL, NULL, NULL),
(7, '1', '000007', '谷まりあ', 1550000, 'https://www.instagram.com/mariaaaa728/?hl=ja', NULL, NULL, 'スターレイプロダクション経由', 17.00, 83.00, 26, '東京', 'タレント、モデル', '芸能', NULL, NULL, NULL, 2, 2.34, NULL, '永井', 'スターレイ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '谷まりあ', '1995-07-28', NULL, NULL, NULL),
(8, '1', '000008', '辻希美', 1326000, 'https://www.instagram.com/tsujinozomi_official/?hl=ja', '8_yt.jfif', 'YouTube1本：500万円\r\n二次利用（サイトへの動画埋め込み）80万円/1クール\r\nInstagram:フィード85万(写真3枚)', NULL, 12.00, 88.00, 34, '東京', NULL, NULL, NULL, NULL, NULL, 2, 2.73, NULL, NULL, 'アップフロントクリエイト\r\n（YouTubeのみMIHA）', 'タカラトミーワンダービューシアター案件', NULL, NULL, NULL, NULL, NULL, NULL, 655000, 'https://www.youtube.com/channel/UCNiurMpWExWgio2lqldycbA', '8_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '辻希美', '1987-06-17', NULL, NULL, NULL),
(9, '4', '000009', '清水あいり', 1200000, 'https://www.instagram.com/shimizuairi/', NULL, NULL, 'ヴィズミック担当者とやり取り', 82.00, 18.00, 28, '東京', 'タレント', '芸能', NULL, NULL, NULL, 2, 3.22, NULL, '永井', 'TRUSTAR', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '清水あいり', '1992-12-17', NULL, NULL, NULL),
(10, '1', '000010', '鈴木えみ', 1180000, 'https://www.instagram.com/emisuzuki_official/', NULL, NULL, '広告担当の方にメール', 85.00, 15.00, 35, '東京', 'モデル', '芸能', NULL, NULL, NULL, 2, NULL, NULL, NULL, 'スターダスト', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '鈴木えみ', '1985-09-13', NULL, NULL, NULL),
(11, '2', '000011', 'あやなん', 1013000, 'https://www.instagram.com/ayachan_0619/', '11_tw.jfif', 'Instagramフィード1投稿100万円、ストーリー投稿1投稿50万円、TikTok100万円、Twitter50万円、Youtube200万円', '炎上中', 86.00, 14.00, 28, '東京', 'ママ、YouTuber', 'ファミリー、バラエティ', '○', 'インスタグラム1投稿コスメ100件', '夫婦で有名', 2, NULL, '○', '柿沼', 'UUUM', '花王YoutubePR', 1121000, 'https://twitter.com/ayachan0619', '11_tw.jfif', NULL, NULL, NULL, 2370000, 'https://www.youtube.com/channel/UColoXxvhfz54o0icqQRPzYw', '11_yt.jfif', 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 1000000, 'https://www.tiktok.com/@ayachan0619?lang=ja-JP', NULL, 80.00, 20.00, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '000-0000-0000', '000-0000', '東京都', '新宿区原町3-37-1', 'ハーモニーレジデンス早稲田夏目坂901', 'あやなん', '三井住友銀行', '新宿', '普通', '0', 'ayanan', '髙橋あやな', '1993-06-19', 'shibanan.channel@gmail.com（担当：立川様）', '123456', '0000-00-00'),
(12, '1', '000012', '重盛さと美', 1002000, 'https://www.instagram.com/satomi_shigemori/?hl=ja', '12_yt.jfif', NULL, '\"敏感肌の為、美容品はハードルが高い', 92.00, 8.00, 32, '東京', 'タレント', '芸能', NULL, NULL, NULL, 2, NULL, NULL, '久留島', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 6000, 'https://www.youtube.com/channel/UCME18URl_IsSr1pVLHmuejA', '12_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1988-09-04', 'kataoka@avilla.jp(担当：片岡さん)', NULL, NULL),
(13, '1', '000013', '板野友美', 1000000, 'https://www.instagram.com/tomo.i_0703/', '13_yt.jfif', 'youtube:200万円/税抜、Instagramフィード1投稿2,050,000円/税抜、1,054,000円/税抜、Twitter:RT3,100,000円/税抜、通常ツイート・引用リツイート4,200,000円/税抜※2021/6', '（現在ストーリーのみ引き受け（金額は基本fw*1円だが交渉可））\"', 73.00, 27.00, 29, '東京', 'アイドル、モデル', '芸能', NULL, NULL, '元AKB48', 2, NULL, NULL, NULL, 'ホリプロ/キングレコード', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 154000, 'https://www.youtube.com/channel/UCDLqvTPnN70jKZNqaDF4GwQ?sub_confirmation=1', '13_yt.jfif', 65.00, 35.00, 4.00, 44.00, 35.00, 10.00, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1991-07-03', NULL, NULL, NULL),
(14, '1', '000014', '宇野実彩子', 987000, 'https://www.instagram.com/misako_uno_aaa/', '14_tw.jfif', NULL, 'インサイト提出不可', 82.00, 18.00, 35, '東京', 'タレント、歌手、女優', '芸能', NULL, NULL, 'AVEX経由で100~120', 2, NULL, NULL, '久留島', NULL, NULL, 1349486, 'https://twitter.com/uno_uno_0716', '14_tw.jfif', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1986-07-16', NULL, NULL, NULL),
(15, '1', '000015', 'ゆりやんレトリィバァ', 970000, 'https://www.instagram.com/yuriyan.retriever/', '15_tw.jfif', 'YouTube動画1本：120万円〜', NULL, 83.00, 17.00, 30, NULL, '芸人', '芸能、トレーニング', NULL, NULL, NULL, 2, NULL, NULL, '齋藤', '\"よしもと', NULL, NULL, 'https://twitter.com/notinu', '15_tw.jfif', NULL, NULL, NULL, 105000, 'https://www.youtube.com/channel/UCDvEytlGb_DYqYoZukE75Lg/', '15_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1990-11-01', NULL, NULL, NULL),
(16, '2', '000016', '古川優香（炎上中2021/12~）', 915000, 'https://www.instagram.com/iamyukaf/?hl=ja', '16_tw.jfif', NULL, NULL, 92.00, 8.00, 24, '東京、大阪', 'youtuber、読モ', 'ファッション', NULL, NULL, '153cm', 2, NULL, NULL, 'YouTube：ZESS\"', NULL, '146000', NULL, 'https://twitter.com/FURUKAWAYUKA_', '16_tw.jfif', NULL, NULL, NULL, 748000, 'https://www.youtube.com/channel/UCm-m76oSXXj41CUxDwUeF4Q', '16_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1997-01-15', 'tomoyama0130@gmail.com（担当：巴山さん）', NULL, NULL),
(17, '2', '000017', 'Maya', 898000, 'https://www.instagram.com/mayaaa_124/', '17_yt.jfif', NULL, '脱毛系競合※2021/6', 86.00, 14.00, 17, NULL, 'モデル、ママ', '自撮り、子育て、美容', NULL, NULL, '今日好き出演', 2, NULL, '○', '久留島', 'ガルー', NULL, 923000, NULL, NULL, NULL, NULL, NULL, 335000, 'https://www.youtube.com/channel/UCa_uTzJrKInoqNZV5IvRjkQ', '17_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1100000, 'https://www.tiktok.com/@MS4wLjABAAAACI0pwg8LarKEQhQpJVvT-tosGzWQypdOvxBKoMKmtbI?lang=ja-JP', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2004-01-24', 'kimonogirls.model@gmail.com（担当：今村さん）', NULL, NULL),
(18, '1', '000018', 'megbaby', 828000, 'https://www.instagram.com/_megbaby_/?hl=ja', '18_tw.jfif', NULL, NULL, 83.00, 17.00, 38, '東京', 'モデル', '芸能', NULL, NULL, 'DMエイジアプロモーション富田経由', 2, NULL, NULL, NULL, 'kimonogirls', NULL, NULL, 'https://twitter.com/megbaby_offi', '18_tw.jfif', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1900, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1982-11-03', NULL, NULL, NULL),
(19, '1', '000019', 'Niki', 818000, 'https://www.instagram.com/__niki22/?hl=ja', '19_tw.jfif', NULL, NULL, 82.00, 18.00, 24, '東京', 'タレント、モデル', '芸能', NULL, NULL, 'avex経由60', 2, NULL, NULL, '久留島', NULL, NULL, 35600, 'https://twitter.com/i__am_niki', '19_tw.jfif', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1996-10-15', NULL, NULL, NULL),
(20, '1', '000020', 'ゆきぽよ', 815000, 'https://www.instagram.com/poyo_ngy/', '20_tw.jfif', NULL, NULL, 74.00, 26.00, 24, '東京', 'タレント/モデル', '芸能', NULL, NULL, NULL, 2, NULL, NULL, '久留島', NULL, NULL, 91900, 'https://twitter.com/poyo_ngy', '20_tw.jfif', NULL, NULL, NULL, 344000, 'https://www.youtube.com/channel/UC6TRiVRGcAyIqyKgVmSz9oQ', '20_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1996-10-23', NULL, NULL, NULL),
(21, '1', '000021', '高橋愛', 796000, 'https://www.instagram.com/i_am_takahashi/', '21_tw.jfif', NULL, NULL, 91.00, 9.00, 34, '東京', 'タレント、モデル', '芸能', NULL, NULL, NULL, 2, NULL, NULL, NULL, 'デルタパートナーズ', NULL, 316000, 'https://twitter.com/takahashi__ai', '21_tw.jfif', NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, 'https://ameblo.jp/takahashiai-blog/', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1986-09-14', NULL, NULL, NULL),
(22, '2', '000022', 'ふくれな', 795000, 'https://www.instagram.com/fukurena/?hl=ja', '22_tw.jfif', NULL, '\"アップフロントクリエイト経由', 83.00, 17.00, 21, '東京', 'Youtuber', 'カラフル、原宿、ファッション、アパレル、youtuber', NULL, NULL, NULL, 2, NULL, NULL, '永井', NULL, NULL, 12000, 'https://twitter.com/fukurena0924', '22_tw.jfif', NULL, NULL, NULL, 1560000, 'https://www.youtube.com/channel/UCCuizDTLsr-mNm_PEGdChVg', '22_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1999-09-24', 'y-yoshikawa@guild-inc.tokyo(担当：吉川様)', NULL, NULL),
(23, '1', '000023', '平野ノラ', 787000, 'https://www.instagram.com/noranoranora1988/', NULL, NULL, '1投稿60（時期により変動）、二次使用不可\"', 77.00, 23.00, 42, NULL, 'ママ、芸人', NULL, NULL, NULL, NULL, 2, NULL, NULL, '永井', 'ギルド', NULL, 594000, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1978-10-20', 'wepr@watanabe-ent.com', NULL, NULL),
(24, '2', '000024', 'リュウジ＠料理のお兄さん（依頼時注意）', 784000, 'https://www.instagram.com/ryuji_foodlabo/?hl=ja', '24_tw.jfif', '\"▼キャスティング+フィード2投稿：150万円', NULL, 86.00, 14.00, 35, '東京、千葉', '料理研究家', 'グルメ、料理', '○', NULL, NULL, 1, NULL, NULL, '柿沼', 'ワタナベエンターテインメント', NULL, NULL, 'https://twitter.com/ore825?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', '24_tw.jfif', NULL, NULL, NULL, 1680000, 'https://www.youtube.com/c/%E3%83%AA%E3%83%A5%E3%82%A6%E3%82%B8%E3%81%AE%E3%83%90%E3%82%BA%E3%83%AC%E3%82%B7%E3%83%94/', '24_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '070-3662-1129', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '菅澤竜士', '1986-05-02', '\"bazurecipe@gmail.com', NULL, NULL),
(25, '2', '000025', '島袋聖南', 784000, 'https://www.instagram.com/seina4444/', '25_it.jpg', '▼LIVE配信費用', NULL, 87.00, 13.00, 34, '東京', 'タレント、モデル', '芸能', NULL, NULL, NULL, 2, NULL, NULL, '浜辺', NULL, NULL, 1556000, NULL, NULL, NULL, NULL, NULL, 29000, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '島袋聖南', '1987-04-04', NULL, NULL, NULL),
(26, '3', '000026', '長澤茉里奈', 775000, 'https://www.instagram.com/marinanagasawa1008/', NULL, 'YouTubeLive配信または動画投稿（撮影はリュウジさんサイドのスタッフ）：280万円', '※契約書期限：2022年4月22日まで', 32.00, 68.00, 25, '東京', 'タレント', '芸能', NULL, NULL, NULL, 2, NULL, NULL, '永井', NULL, NULL, 242000, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1995-10-08', NULL, NULL, NULL),
(27, '2', '000027', 'まあたそ', 735000, 'https://www.instagram.com/5m91r/?hl=ja', '27_yt.jfif', 'インスタライブ（撮影は本人のスマートフォンをお借りして弊社が行う）：120万円', NULL, 82.00, 18.00, 25, NULL, NULL, NULL, NULL, NULL, NULL, 2, NULL, NULL, '永井', 'TRUSTAR', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1930000, 'https://www.youtube.com/channel/UCxlsYyeri8MOpap3w3JbWSQ', '27_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1995-09-01', NULL, NULL, NULL),
(28, '', '000028', '愛沢えみり', 729000, 'https://www.instagram.com/emiri_aizawa/', '28_tw.jfif', NULL, 'ヴィズミック担当者とやり取り', 87.00, 13.00, 32, '東京', '元キャバ嬢', '元キャバ嬢', NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, 'https://twitter.com/emirio9o1', '28_tw.jfif', NULL, NULL, NULL, 334000, 'https://www.youtube.com/channel/UClP8QHtFXrjXQfasbj2Hp-Q', '28_yt.jfif', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1988-09-01', NULL, NULL, NULL),
(29, '2', '000029', 'なえなの', 721000, 'https://www.instagram.com/naenano0114/', '29_yt.jfif', '', ' ', 61.00, 39.00, 0, '東京', 'YouTuber', 'YouTuber', NULL, '  ', '', 2, 0.00, '', '小池', '[]', '', 248000, '', NULL, 0, '', NULL, 612000, 'https://www.youtube.com/channel/UCRPGvS02AnqD1qZrZOdRY4g/', '29_yt.jfif', 0.00, 0.00, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '', NULL, NULL, NULL, 0, '', 0, '', '', 0, 0, 0, 0, NULL, 0, '', '', '', '', '', '', '', '', '', '', '', 'なえなの', '0000-00-00', 'test@test', '', NULL),
(192, NULL, '000001', 'テスト', 10, 'yua_mikami', NULL, 'Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿)', 'アダルト', 64.00, 36.00, 28, '東京', 'タレント', 'YouTuber', '', 'インスタグラム1投稿コスメ100件', '元AKB', 2, 2.52, '', '小池', 'YouTube:AnyMind', '花王YoutubePR', 2, 'https://twitter.com/yua_mikami', NULL, 0, '', NULL, 419, 'https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w', NULL, 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 2, 'https://www.tiktok.com/@yua_mikami?lang=ja-JP', NULL, NULL, NULL, 0, '', 0, '', '', NULL, NULL, NULL, NULL, NULL, NULL, '000-0000-0000', '000-0000', '東京都', '新宿区原町3-37-1', 'ハーモニーレジデンス早稲田夏目坂901', '三上悠亜', '三井住友銀行', '新宿', '普通', '0000000', 'mkamiyua', '三上悠亜', '1993-06-19', 'shibanan.channel@gmail.com（担当：立川様）', '123456', '2021-08-05'),
(193, NULL, '000001', 'テスト2', 10, 'yua_mikami', NULL, '', ' テスト', 64.00, 36.00, 28, '東京', 'タレント', '美容', '', ' インスタグラム1投稿コスメ100件 ', '', 2, 2.52, '', '小池', '[]', '花王YoutubePR', 2, 'https://twitter.com/yua_mikami', NULL, 10, 'https://twitter.com/yua_mikami', NULL, 419, 'https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w', NULL, 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 2, 'https://www.tiktok.com/@yua_mikami?lang=ja-JP', NULL, NULL, NULL, 10, 'https://twitter.com/yua_mikami', 100000, 'https://twitter.com/yua_mikami', 'https://twitter.com/yua_mikami', 0, 0, 0, 0, NULL, 0, '000-0000-0000', '000-0000', '東京都', '新宿区原町3-37-1', 'ハーモニーレジデンス早稲田夏目坂901', '三上悠亜', '三井住友銀行', '新宿', '普通', '0000000', 'mkamiyua', '髙橋あんり', '1996-06-04', 'shibanan.channel@gmail.com', '123456', '2021-08-05'),
(194, NULL, '000001', 'テスト2', 10, 'yua_mikami', NULL, 'Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿)', 'テスト', 64.00, 36.00, 28, '東京', 'タレント', 'YouTuber', '', 'インスタグラム1投稿コスメ100件', '元AKB', 2, 2.52, '', '小池', 'YouTube:AnyMind', '花王YoutubePR', 2, 'https://twitter.com/yua_mikami', NULL, 10, 'https://twitter.com/yua_mikami', NULL, 419, 'https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w', NULL, 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 2, 'https://www.tiktok.com/@yua_mikami?lang=ja-JP', NULL, NULL, NULL, 10, 'https://twitter.com/yua_mikami', 100000, 'https://twitter.com/yua_mikami', 'https://twitter.com/yua_mikami', NULL, NULL, NULL, NULL, NULL, NULL, '000-0000-0000', '000-0000', '東京都', '新宿区原町3-37-1', 'ハーモニーレジデンス早稲田夏目坂901', '三上悠亜', '三井住友銀行', '新宿', '普通', '0000000', 'mkamiyua', 'まきようこ', '1993-06-19', 'shibanan.channel@gmail.com（担当：立川様）', '123456', '2021-08-05'),
(195, NULL, '000001', 'テスト2', 10, 'yua_mikami', NULL, 'Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿)', 'テスト', 64.00, 36.00, 28, '東京', 'タレント', 'YouTuber', '', 'インスタグラム1投稿コスメ100件', '元AKB', 2, 2.52, '', '小池', 'YouTube:AnyMind', '花王YoutubePR', 2, 'https://twitter.com/yua_mikami', NULL, 10, 'https://twitter.com/yua_mikami', NULL, 419, 'https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w', NULL, 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 2, 'https://www.tiktok.com/@yua_mikami?lang=ja-JP', NULL, NULL, NULL, 10, 'https://twitter.com/yua_mikami', 100000, 'https://twitter.com/yua_mikami', 'https://twitter.com/yua_mikami', NULL, NULL, NULL, NULL, NULL, NULL, '000-0000-0000', '000-0000', '東京都', '新宿区原町3-37-1', 'ハーモニーレジデンス早稲田夏目坂901', '三上悠亜', '三井住友銀行', '新宿', '普通', '0000000', 'mkamiyua', '竹脇まりな', '1993-06-19', 'shibanan.channel@gmail.com（担当：立川様）', '123456', '2021-08-05'),
(196, NULL, '000001', 'テスト2', 10, 'yua_mikami', NULL, 'Instagramフィード400万円,Instagramストーリー300万円、TikTo300万円,Twitter300万円,YouTube:450万(6投稿)', 'テスト', 64.00, 36.00, 28, '東京', 'タレント', 'YouTuber', '', 'インスタグラム1投稿コスメ100件', '元AKB', 2, 2.52, '', '小池', 'YouTube:AnyMind', '花王YoutubePR', 2, 'https://twitter.com/yua_mikami', NULL, 10, 'https://twitter.com/yua_mikami', NULL, 419, 'https://www.youtube.com/channel/UC0BCfHbNORhd7dsw1R5rw9w', NULL, 80.00, 20.00, 10.00, 20.00, 40.00, 10.00, 10.00, 5.00, 5.00, 2, 'https://www.tiktok.com/@yua_mikami?lang=ja-JP', NULL, NULL, NULL, 10, 'https://twitter.com/yua_mikami', 100000, 'https://twitter.com/yua_mikami', 'https://twitter.com/yua_mikami', NULL, NULL, NULL, NULL, NULL, NULL, '000-0000-0000', '000-0000', '東京都', '新宿区原町3-37-1', 'ハーモニーレジデンス早稲田夏目坂901', '三上悠亜', '三井住友銀行', '新宿', '普通', '0000000', 'mkamiyua', '伊原葵', '1993-06-19', 'shibanan.channel@gmail.com（担当：立川様）', '123456', '2021-08-05');

-- --------------------------------------------------------

--
-- 테이블 구조 `tcampaign`
--

CREATE TABLE `tcampaign` (
  `id` int(11) UNSIGNED NOT NULL,
  `talent_id` int(11) NOT NULL,
  `campaign_id` int(11) NOT NULL,
  `order` int(11) NOT NULL,
  `net_price` int(11) NOT NULL,
  `gross_price` int(11) NOT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 테이블의 덤프 데이터 `tcampaign`
--

INSERT INTO `tcampaign` (`id`, `talent_id`, `campaign_id`, `order`, `net_price`, `gross_price`, `comment`) VALUES
(4, 1, 3, 1, 0, 0, ''),
(5, 2, 3, 2, 0, 0, ''),
(7, 1, 4, 3, 1000000, 2000000, 'テスト'),
(8, 2, 4, 2, 0, 0, ''),
(9, 3, 4, 4, 0, 0, ''),
(11, 10, 4, 1, 0, 0, ''),
(12, 4, 4, 5, 0, 0, ''),
(23, 4, 1, 1, 0, 0, ''),
(24, 5, 1, 2, 0, 0, ''),
(25, 6, 1, 3, 0, 0, ''),
(30, 2, 1, 4, 0, 0, ''),
(31, 4, 8, 1, 0, 0, ''),
(32, 5, 8, 2, 0, 0, ''),
(33, 6, 8, 3, 0, 0, ''),
(34, 2, 8, 4, 0, 0, ''),
(36, 7, 1, 5, 0, 0, ''),
(41, 9, 1, 7, 0, 0, '');

-- --------------------------------------------------------

--
-- 테이블 구조 `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `created_at` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- 테이블의 덤프 데이터 `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`, `type`, `created_at`) VALUES
(7, 'admin@admin.com', 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 2, '2021-07-12'),
(14, 'kastumto1019@gmail.com', '勝本　秀夫', '7c4a8d09ca3762af61e59520943dc26494f8941b', 2, '2021-07-22'),
(17, 'kurushima@hermandot.co.jp', 'テスト', 'da39a3ee5e6b4b0d3255bfef95601890afd80709', 1, '2021-09-25');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `campaign`
--
ALTER TABLE `campaign`
  ADD PRIMARY KEY (`id`);

--
-- 테이블의 인덱스 `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- 테이블의 인덱스 `context`
--
ALTER TABLE `context`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 테이블의 인덱스 `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 테이블의 인덱스 `insite`
--
ALTER TABLE `insite`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 테이블의 인덱스 `talents`
--
ALTER TABLE `talents`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 테이블의 인덱스 `tcampaign`
--
ALTER TABLE `tcampaign`
  ADD PRIMARY KEY (`id`);

--
-- 테이블의 인덱스 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `campaign`
--
ALTER TABLE `campaign`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- 테이블의 AUTO_INCREMENT `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 테이블의 AUTO_INCREMENT `favourite`
--
ALTER TABLE `favourite`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 테이블의 AUTO_INCREMENT `insite`
--
ALTER TABLE `insite`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 테이블의 AUTO_INCREMENT `talents`
--
ALTER TABLE `talents`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT ' ', AUTO_INCREMENT=197;

--
-- 테이블의 AUTO_INCREMENT `tcampaign`
--
ALTER TABLE `tcampaign`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- 테이블의 AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
