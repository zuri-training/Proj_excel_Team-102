from sqlalchemy import ForeignKey, UniqueConstraint, text, TIMESTAMP, Column, Integer, String

from app.database import Base

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email_address = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    time_added = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))

class Files(Base):
    __tablename__ = "files"

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    file_name = Column(String, nullable=False)
    status = Column(Integer, nullable=False, default=1)
    time_added = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))

    __table_args__ = (UniqueConstraint("user_id", "file_name", name="user_file_uc"),)

class DiffChecker(Base):
    __tablename__ = "diff_checker"

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    file1 = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=False)
    file2 = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=False)
    time_requested = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))
    mismatch_found = Column(Integer, nullable=True)
    highlighted_file1 = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    highlighted_file2 = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    time_completed = Column(TIMESTAMP(timezone=True), nullable=True)

class HighlightDuplicates(Base):
    __tablename__ = "highlight_duplicates"

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=False)
    unique_columns = Column(String, nullable=False)
    time_requested = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))
    duplicate_rows = Column(Integer, nullable=True)
    highlighted_file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    time_completed = Column(TIMESTAMP(timezone=True), nullable=True)

class HighlightDuplicates2(Base):
    __tablename__ = "highlight_duplicates2"

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=False)
    unique_columns = Column(String, nullable=False)
    time_requested = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))
    duplicate_rows = Column(Integer, nullable=True)
    highlighted_file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    analytics_file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    time_completed = Column(TIMESTAMP(timezone=True), nullable=True)

class RemoveDuplicates(Base):
    __tablename__ = "remove_duplicates"

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=False)
    unique_columns = Column(String, nullable=False)
    time_requested = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))
    duplicate_rows = Column(Integer, nullable=True)
    without_duplicates_file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    time_completed = Column(TIMESTAMP(timezone=True), nullable=True)

class RemoveDuplicates2(Base):
    __tablename__ = "remove_duplicates2"

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="RESTRICT"), nullable=False)
    file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=False)
    unique_columns = Column(String, nullable=False)
    time_requested = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))
    duplicate_rows = Column(Integer, nullable=True)
    without_duplicates_file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    duplicates_file = Column(Integer, ForeignKey("files.id", ondelete="RESTRICT"), nullable=True)
    time_completed = Column(TIMESTAMP(timezone=True), nullable=True)