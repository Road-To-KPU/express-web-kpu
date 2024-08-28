-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2023 at 01:26 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datapemilih`
--

-- --------------------------------------------------------

--
-- Table structure for table `dpk`
--

CREATE TABLE `dpk` (
  `nama` varchar(255) DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kabupaten` varchar(255) DEFAULT NULL,
  `pemilih_l` varchar(255) DEFAULT NULL,
  `pemilih_p` varchar(255) DEFAULT NULL,
  `gen_z` varchar(255) DEFAULT NULL,
  `gen_milenial` varchar(255) DEFAULT NULL,
  `gen_x` varchar(255) DEFAULT NULL,
  `baby_boomer` varchar(255) DEFAULT NULL,
  `pre_boomer` varchar(255) DEFAULT NULL,
  `tuna_daksa` varchar(255) DEFAULT NULL,
  `tuna_netra` varchar(255) DEFAULT NULL,
  `tuna_rungu` varchar(255) DEFAULT NULL,
  `tuna_grahita` varchar(255) DEFAULT NULL,
  `disabilitas_lainnya` varchar(255) DEFAULT NULL,
  `peta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `dpk`
--

INSERT INTO `dpk` (`nama`, `provinsi`, `kabupaten`, `pemilih_l`, `pemilih_p`, `gen_z`, `gen_milenial`, `gen_x`, `baby_boomer`, `pre_boomer`, `tuna_daksa`, `tuna_netra`, `tuna_rungu`, `tuna_grahita`, `disabilitas_lainnya`, `peta`) VALUES
('selayar', 'Sulawesi Selatan', 'Kepulauan Selayar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5070', NULL),
('bulukumba', 'Sulawesi Selatan', 'Bulukumba', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '8000', NULL),
('bantaeng', 'Sulawesi Selatan', 'Bantaeng', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5500', NULL),
('jeneponto', 'Sulawesi Selatan', 'Jeneponto', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '9000', NULL),
('takalar', 'Sulawesi Selatan', 'Takalar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('gowa', 'Sulawesi Selatan', 'Gowa', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('sinjai', 'Sulawesi Selatan', 'Sinjai', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('bone', 'Sulawesi Selatan', 'Bone', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('maros', 'Sulawesi Selatan', 'Maros', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('pangkep', 'Sulawesi Selatan', 'Pangkep', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('barru', 'Sulawesi Selatan', 'Barru', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('soppeng', 'Sulawesi Selatan', 'Soppeng', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('wajo', 'Sulawesi Selatan', 'Wajo', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('sidrap', 'Sulawesi Selatan', 'Sidenreng Rappang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('pinrang', 'Sulawesi Selatan', 'Pinrang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('enrekang', 'Sulawesi Selatan', 'Enrekang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu', 'Sulawesi Selatan', 'Luwu', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('tana_toraja', 'Sulawesi Selatan', 'Tana Toraja', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu_utara', 'Sulawesi Selatan', 'Luwu Utara', '10000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu_timur', 'Sulawesi Selatan', 'Luwu Timur', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('toraja_utara', 'Sulawesi Selatan', 'Toraja Utara', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('makassar', 'Sulawesi Selatan', 'Kota Makassar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('parepare', 'Sulawesi Selatan', 'Kota Parepare', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('palopo', 'Sulawesi Selatan', 'Kota Palopo', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dpt`
--

CREATE TABLE `dpt` (
  `nama` varchar(255) DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kabupaten` varchar(255) DEFAULT NULL,
  `pemilih_l` varchar(255) DEFAULT NULL,
  `pemilih_p` varchar(255) DEFAULT NULL,
  `gen_z` varchar(255) DEFAULT NULL,
  `gen_milenial` varchar(255) DEFAULT NULL,
  `gen_x` varchar(255) DEFAULT NULL,
  `baby_boomer` varchar(255) DEFAULT NULL,
  `pre_boomer` varchar(255) DEFAULT NULL,
  `tuna_daksa` varchar(255) DEFAULT NULL,
  `tuna_netra` varchar(255) DEFAULT NULL,
  `tuna_rungu` varchar(255) DEFAULT NULL,
  `tuna_grahita` varchar(255) DEFAULT NULL,
  `disabilitas_lainnya` varchar(255) DEFAULT NULL,
  `peta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `dpt`
--

INSERT INTO `dpt` (`nama`, `provinsi`, `kabupaten`, `pemilih_l`, `pemilih_p`, `gen_z`, `gen_milenial`, `gen_x`, `baby_boomer`, `pre_boomer`, `tuna_daksa`, `tuna_netra`, `tuna_rungu`, `tuna_grahita`, `disabilitas_lainnya`, `peta`) VALUES
('selayar', 'Sulawesi Selatan', 'Kepulauan Selayar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '400', NULL),
('bulukumba', 'Sulawesi Selatan', 'Bulukumba', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '3000', NULL),
('bantaeng', 'Sulawesi Selatan', 'Bantaeng', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('jeneponto', 'Sulawesi Selatan', 'Jeneponto', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('takalar', 'Sulawesi Selatan', 'Takalar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('gowa', 'Sulawesi Selatan', 'Gowa', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('sinjai', 'Sulawesi Selatan', 'Sinjai', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('bone', 'Sulawesi Selatan', 'Bone', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('maros', 'Sulawesi Selatan', 'Maros', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('pangkep', 'Sulawesi Selatan', 'Pangkep', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('barru', 'Sulawesi Selatan', 'Barru', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('soppeng', 'Sulawesi Selatan', 'Soppeng', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('wajo', 'Sulawesi Selatan', 'Wajo', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('sidrap', 'Sulawesi Selatan', 'Sidenreng Rappang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('pinrang', 'Sulawesi Selatan', 'Pinrang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('enrekang', 'Sulawesi Selatan', 'Enrekang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu', 'Sulawesi Selatan', 'Luwu', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('tana_toraja', 'Sulawesi Selatan', 'Tana Toraja', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu_utara', 'Sulawesi Selatan', 'Luwu Utara', '10000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu_timur', 'Sulawesi Selatan', 'Luwu Timur', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('toraja_utara', 'Sulawesi Selatan', 'Toraja Utara', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('makassar', 'Sulawesi Selatan', 'Kota Makassar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('parepare', 'Sulawesi Selatan', 'Kota Parepare', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('palopo', 'Sulawesi Selatan', 'Kota Palopo', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dptb`
--

CREATE TABLE `dptb` (
  `nama` varchar(255) DEFAULT NULL,
  `provinsi` varchar(255) DEFAULT NULL,
  `kabupaten` varchar(255) DEFAULT NULL,
  `pemilih_l` varchar(255) DEFAULT NULL,
  `pemilih_p` varchar(255) DEFAULT NULL,
  `gen_z` varchar(255) DEFAULT NULL,
  `gen_milenial` varchar(255) DEFAULT NULL,
  `gen_x` varchar(255) DEFAULT NULL,
  `baby_boomer` varchar(255) DEFAULT NULL,
  `pre_boomer` varchar(255) DEFAULT NULL,
  `tuna_daksa` varchar(255) DEFAULT NULL,
  `tuna_netra` varchar(255) DEFAULT NULL,
  `tuna_rungu` varchar(255) DEFAULT NULL,
  `tuna_grahita` varchar(255) DEFAULT NULL,
  `disabilitas_lainnya` varchar(255) DEFAULT NULL,
  `peta` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `dptb`
--

INSERT INTO `dptb` (`nama`, `provinsi`, `kabupaten`, `pemilih_l`, `pemilih_p`, `gen_z`, `gen_milenial`, `gen_x`, `baby_boomer`, `pre_boomer`, `tuna_daksa`, `tuna_netra`, `tuna_rungu`, `tuna_grahita`, `disabilitas_lainnya`, `peta`) VALUES
('selayar', 'Sulawesi Selatan', 'Kepulauan Selayar', '10200', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('bulukumba', 'Sulawesi Selatan', 'Bulukumba', '203000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('bantaeng', 'Sulawesi Selatan', 'Bantaeng', '31445', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('jeneponto', 'Sulawesi Selatan', 'Jeneponto', '123456', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('takalar', 'Sulawesi Selatan', 'Takalar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('gowa', 'Sulawesi Selatan', 'Gowa', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('sinjai', 'Sulawesi Selatan', 'Sinjai', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('bone', 'Sulawesi Selatan', 'Bone', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('maros', 'Sulawesi Selatan', 'Maros', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('pangkep', 'Sulawesi Selatan', 'Pangkep', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('barru', 'Sulawesi Selatan', 'Barru', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('soppeng', 'Sulawesi Selatan', 'Soppeng', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('wajo', 'Sulawesi Selatan', 'Wajo', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('sidrap', 'Sulawesi Selatan', 'Sidenreng Rappang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('pinrang', 'Sulawesi Selatan', 'Pinrang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('enrekang', 'Sulawesi Selatan', 'Enrekang', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu', 'Sulawesi Selatan', 'Luwu', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('tana_toraja', 'Sulawesi Selatan', 'Tana Toraja', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu_utara', 'Sulawesi Selatan', 'Luwu Utara', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('luwu_timur', 'Sulawesi Selatan', 'Luwu Timur', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('toraja_utara', 'Sulawesi Selatan', 'Toraja Utara', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('makassar', 'Sulawesi Selatan', 'Kota Makassar', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('parepare', 'Sulawesi Selatan', 'Kota Parepare', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL),
('palopo', 'Sulawesi Selatan', 'Kota Palopo', '100000', '150000', '90000', '80000', '100000', '50000', '20000', '10000', '20000', '30000', '10000', '5000', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `titik_kordinat`
--

CREATE TABLE `titik_kordinat` (
  `provinsi` varchar(100) NOT NULL,
  `link_id` varchar(100) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `Alamat` varchar(100) NOT NULL,
  `Kab_kota` varchar(100) NOT NULL,
  `No_Hp` int(100) NOT NULL,
  `Titik_Koordinat` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `titik_kordinat`
--

INSERT INTO `titik_kordinat` (`provinsi`, `link_id`, `nama`, `Alamat`, `Kab_kota`, `No_Hp`, `Titik_Koordinat`) VALUES
('sulawesi selatan', '', 'bantaeng', 'Takkalala, Kec. Wara Sel', 'bantaeng', 2147483647, 0),
('sulawesi selatan', '', 'barru', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'barru', 2147483647, 0),
('sulawesi selatan', '', 'bone', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'bone', 2147483647, 0),
('sulawesi selatan', '', 'bulukumba', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'bulukumba', 2147483647, 0),
('sulawesi selatan', '', 'enrekang', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'enrekang', 2147483647, 0),
('sulawesi selatan', '', 'gowa', 'Takkalala, Kec. Wara Sel', 'gowa', 2147483647, 0),
('sulawesi selatan', '', 'jeneponto', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'jeneponto', 2147483647, 0),
('sulawesi selatan', '', 'luwu', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'luwu', 2147483647, 0),
('sulawesi selatan', '', 'luwu timur', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'luwu timur', 2147483647, 0),
('sulawesi selatan', '', 'luwu utara', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'luwu utara', 2147483647, 0),
('sulawesi selatan', '', 'makassar', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'makassar', 2147483647, 0),
('sulawesi selatan', '', 'maros', 'Takkalala, Kec. Wara Sel', 'maros', 2147483647, 0),
('sulawesi selatan', '', 'palopo', 'Takkalala, Kec. Wara Sel', 'palopo', 2147483647, 0),
('sulawesi selatan', '', 'pangkep', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'pangkep', 2147483647, 0),
('sulawesi selatan', '', 'parepare', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'parepare', 2147483647, 0),
('sulawesi selatan', '', 'pinrang', 'Takkalala, Kec. Wara Sel', 'pinrang', 2147483647, 0),
('sulawesi selatan', '', 'selayar', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'selayar', 2147483647, 0),
('sulawesi selatan', '', 'sidrap', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'sidrap', 2147483647, 0),
('sulawesi selatan', '', 'sinjai', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'sinjai', 2147483647, 0),
('sulawesi selatan', '', 'soppeng', 'Takkalala, Kec. Wara Sel', 'soppeng', 2147483647, 0),
('sulawesi selatan', '', 'takalar', 'Jl. Bumi Harapan, Bumi Harapan, Kec. Bacukiki Bar', 'takalar', 2147483647, 0),
('sulawesi selatan', '', 'tana toraja', 'Takkalala, Kec. Wara Sel', 'tana toraja', 2147483647, 0),
('sulawesi selatan', '', 'toraja utara', 'Takkalala, Kec. Wara Sel', 'toraja utara', 2147483647, 0),
('sulawesi selatan', '', 'wajo', 'Jl. Perumnas Raya, Manggala, Kec. Manggala', 'wajo', 2147483647, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `titik_kordinat`
--
ALTER TABLE `titik_kordinat`
  ADD PRIMARY KEY (`nama`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
